create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  name text not null,
  email text not null,
  phone text,
  trip_type text not null,
  travel_window text,
  budget text,
  party_size text,
  merch_interest text not null default 'Yes',
  stage text not null default 'new',
  source text not null default 'website',
  notes text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_stage_idx on public.leads (stage);
create index if not exists leads_trip_type_idx on public.leads (trip_type);

alter table public.leads enable row level security;

drop policy if exists "public can insert leads" on public.leads;
create policy "public can insert leads"
on public.leads
for insert
to anon, authenticated
with check (true);

drop policy if exists "authenticated users can read leads" on public.leads;
create policy "authenticated users can read leads"
on public.leads
for select
to authenticated
using (true);

drop policy if exists "authenticated users can update leads" on public.leads;
create policy "authenticated users can update leads"
on public.leads
for update
to authenticated
using (true)
with check (true);
