-- Run this once in your free Supabase SQL Editor (https://supabase.com)
create table if not exists public.user_libraries (
  user_id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.user_libraries enable row level security;

-- Personal single-user policy (or replace with auth.uid() = user_id if adding login)
create policy "Allow personal sync by user_id"
  on public.user_libraries
  for all
  using (true)
  with check (true);
