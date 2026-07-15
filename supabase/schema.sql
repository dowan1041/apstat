-- ============================================================
-- Field Notes (AP Stat) — Supabase schema
-- Run this once in the Supabase SQL Editor for your new project
-- (Dashboard → SQL Editor → New query → paste → Run).
--
-- Creates:
--   access_codes   — invite codes you control (server-side only)
--   allowed_users   — who has redeemed a code (gates app access)
--   user_state      — synced study progress, one row per chapter/user
-- plus RLS policies and the redeem_access_code() RPC the client calls.
-- ============================================================

-- ---------------- access_codes ----------------
-- Never exposed to clients directly — only readable from inside
-- redeem_access_code() below, which runs as the (RLS-bypassing)
-- function owner. No RLS policies are defined for this table on
-- purpose, so the default is deny-all for anon/authenticated.
create table if not exists access_codes (
  code       text primary key,
  active     boolean not null default true,
  label      text,
  created_at timestamptz not null default now()
);
alter table access_codes enable row level security;

-- TODO: replace 'REPLACE-ME' with the actual invite code you want
-- to hand out, then run this file. You can add more codes later
-- (e.g. for a different cohort) straight from the SQL editor:
--   insert into access_codes (code, label) values ('ANOTHER-CODE', 'spring cohort');
insert into access_codes (code, label)
values ('REPLACE-ME', 'first cohort')
on conflict (code) do nothing;

-- ---------------- allowed_users ----------------
-- One row per Google account that has successfully redeemed a code.
-- Only readable by the user themself; writable only via the RPC.
create table if not exists allowed_users (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  redeemed_code text references access_codes(code),
  created_at    timestamptz not null default now()
);
alter table allowed_users enable row level security;

create policy "select own allowed_users row"
  on allowed_users for select
  using (auth.uid() = user_id);
-- No insert/update/delete policies — regular clients can never
-- write this table directly, only redeem_access_code() can
-- (it runs as the function owner, which bypasses RLS in Supabase).

-- ---------------- user_state ----------------
-- Generic per-user key/value store for synced study progress.
-- key = chapter id (e.g. '1-1'), value = that chapter's progress
-- object (same shape as PROGRESS[id] in app.js), as jsonb.
create table if not exists user_state (
  user_id    uuid not null references auth.users(id) on delete cascade,
  key        text not null,
  value      jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table user_state enable row level security;

-- Registration is enforced here too, not just in the app's UI:
-- a signed-in Google account that hasn't redeemed a code yet has
-- no rows it can read or write, even if it calls the client directly.
create policy "select own user_state, if registered"
  on user_state for select
  using (
    auth.uid() = user_id
    and exists (select 1 from allowed_users where user_id = auth.uid())
  );

create policy "insert own user_state, if registered"
  on user_state for insert
  with check (
    auth.uid() = user_id
    and exists (select 1 from allowed_users where user_id = auth.uid())
  );

create policy "update own user_state, if registered"
  on user_state for update
  using (
    auth.uid() = user_id
    and exists (select 1 from allowed_users where user_id = auth.uid())
  )
  with check (
    auth.uid() = user_id
    and exists (select 1 from allowed_users where user_id = auth.uid())
  );

create policy "delete own user_state, if registered"
  on user_state for delete
  using (
    auth.uid() = user_id
    and exists (select 1 from allowed_users where user_id = auth.uid())
  );

-- ---------------- redeem_access_code() ----------------
-- Called by the client as: sb.rpc('redeem_access_code', { p_code: code })
-- Validates the code server-side (the code value is never sent to,
-- or checked by, the browser) and, on success, adds the caller to
-- allowed_users. Returns true/false; never throws for a bad code.
create or replace function public.redeem_access_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid  uuid := auth.uid();
  v_code text;
begin
  if v_uid is null then
    return false; -- must already have a valid Google/Supabase session
  end if;

  -- look up the canonical stored code (preserves its original casing,
  -- so the redeemed_code FK below always matches access_codes.code)
  select code into v_code
  from access_codes
  where active and lower(code) = lower(trim(p_code))
  limit 1;

  if v_code is null then
    return false;
  end if;

  insert into allowed_users (user_id, redeemed_code)
  values (v_uid, v_code)
  on conflict (user_id) do nothing;

  return true;
end;
$$;

-- Only signed-in users may call this — never anonymous visitors.
revoke all on function public.redeem_access_code(text) from public;
revoke all on function public.redeem_access_code(text) from anon;
grant execute on function public.redeem_access_code(text) to authenticated;
