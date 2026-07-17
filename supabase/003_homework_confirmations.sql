-- ============================================================
-- Field Notes (AP Stat) — homework check/confirm workflow
-- Run this once in the Supabase SQL Editor, AFTER 002_teacher_role_and_reports.sql
-- has already been applied (Dashboard → SQL Editor → New query → paste → Run).
--
-- Adds:
--   homework_confirmations — one row per (student, chapter) once a
--                             teacher has reviewed that homework and
--                             released the graded results to the student
--   confirm_homework() RPC — teacher-only, upserts a confirmation row
--
-- Design note: confirmation state is NOT stored inside the student's
-- user_state progress blob. That blob is fully overwritten by the
-- student's own client on every persist() call, so anything a teacher
-- wrote into it could be silently clobbered the next time the student's
-- browser saves. A separate table sidesteps that race entirely.
-- ============================================================

create table if not exists homework_confirmations (
  student_id   uuid not null references auth.users(id) on delete cascade,
  chapter_id   text not null,
  confirmed_at timestamptz not null default now(),
  confirmed_by uuid not null references auth.users(id),
  primary key (student_id, chapter_id)
);
alter table homework_confirmations enable row level security;

-- A student can read their own confirmation rows (to know whether their
-- teacher has released results yet); a teacher can read anyone's, so the
-- "Students" report tab can show current status per chapter.
create policy "read own or teacher"
  on homework_confirmations for select
  using (
    student_id = auth.uid()
    or exists (select 1 from allowed_users au where au.user_id = auth.uid() and au.role = 'teacher')
  );

-- A student may delete their own confirmation row — this is how a
-- resubmitted homework goes back to "awaiting review": the app deletes
-- the row for that chapter right before re-grading, so a teacher must
-- confirm the new answers before the student sees them.
create policy "student can delete own"
  on homework_confirmations for delete
  using (student_id = auth.uid());

-- No insert/update policies — confirming (creating/refreshing a row) is
-- only possible through confirm_homework() below, which runs as the
-- (RLS-bypassing) function owner and checks the caller is a teacher.

-- ---------------- confirm_homework() ----------------
-- Called by the client as:
--   sb.rpc('confirm_homework', { p_student_id, p_chapter_id })
-- Only a caller whose own allowed_users row has role='teacher' can
-- succeed; everyone else gets a thrown exception.
create or replace function public.confirm_homework(p_student_id uuid, p_chapter_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from allowed_users au where au.user_id = auth.uid() and au.role = 'teacher'
  ) then
    raise exception 'not authorized';
  end if;

  insert into homework_confirmations (student_id, chapter_id, confirmed_by, confirmed_at)
  values (p_student_id, p_chapter_id, auth.uid(), now())
  on conflict (student_id, chapter_id) do update
    set confirmed_at = now(), confirmed_by = excluded.confirmed_by;
end;
$$;

revoke all on function public.confirm_homework(uuid, text) from public;
revoke all on function public.confirm_homework(uuid, text) from anon;
grant execute on function public.confirm_homework(uuid, text) to authenticated;
