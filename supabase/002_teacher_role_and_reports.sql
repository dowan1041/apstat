-- ============================================================
-- Field Notes (AP Stat) — teacher role + student-report migration
-- Run this once in the Supabase SQL Editor, AFTER schema.sql has
-- already been applied (Dashboard → SQL Editor → New query → paste → Run).
--
-- Adds:
--   allowed_users.role     — 'student' (default) or 'teacher'
--   get_all_student_progress() — teacher-only RPC returning every
--                                 student's email + synced progress
-- and updates redeem_access_code() so role is assigned server-side,
-- never trusted from the client.
-- ============================================================

-- ---------------- allowed_users.role ----------------
alter table allowed_users
  add column if not exists role text not null default 'student'
  check (role in ('student', 'teacher'));

-- One-time backfill: your own account was registered before this
-- column existed, so promote it explicitly. Safe to re-run.
update allowed_users au
set role = 'teacher'
from auth.users u
where u.id = au.user_id
  and u.email = 'dowan1041@gmail.com'
  and au.role <> 'teacher';

-- ---------------- redeem_access_code() ----------------
-- Same as before, but now assigns role server-side based on the
-- caller's verified email (from auth.users, never from the client) —
-- a student can never claim the teacher role by any client-side trick.
create or replace function public.redeem_access_code(p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid   uuid := auth.uid();
  v_code  text;
  v_email text;
begin
  if v_uid is null then
    return false;
  end if;

  select code into v_code
  from access_codes
  where active and lower(code) = lower(trim(p_code))
  limit 1;

  if v_code is null then
    return false;
  end if;

  select email into v_email from auth.users where id = v_uid;

  insert into allowed_users (user_id, redeemed_code, role)
  values (
    v_uid,
    v_code,
    case when v_email = 'dowan1041@gmail.com' then 'teacher' else 'student' end
  )
  on conflict (user_id) do nothing;

  return true;
end;
$$;

revoke all on function public.redeem_access_code(text) from public;
revoke all on function public.redeem_access_code(text) from anon;
grant execute on function public.redeem_access_code(text) to authenticated;

-- ---------------- get_all_student_progress() ----------------
-- Called by the client as: sb.rpc('get_all_student_progress')
-- Only a caller whose OWN allowed_users row has role='teacher' gets
-- data back (checked inside the function, server-side) — everyone
-- else gets a thrown exception. This is the single, audited place
-- cross-user reads happen; user_state's RLS policies are untouched
-- and stay strictly own-row-only for every role.
create or replace function public.get_all_student_progress()
returns table (
  user_id       uuid,
  email         text,
  registered_at timestamptz,
  progress      jsonb
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from allowed_users where user_id = auth.uid() and role = 'teacher'
  ) then
    raise exception 'not authorized';
  end if;

  return query
    select
      au.user_id,
      u.email,
      au.created_at as registered_at,
      coalesce(us.value, '{}'::jsonb) as progress
    from allowed_users au
    join auth.users u on u.id = au.user_id
    left join user_state us on us.user_id = au.user_id and us.key = 'progress'
    where au.role = 'student'
    order by au.created_at asc;
end;
$$;

revoke all on function public.get_all_student_progress() from public;
revoke all on function public.get_all_student_progress() from anon;
grant execute on function public.get_all_student_progress() to authenticated;
