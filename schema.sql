-- KBcarSell initial database schema draft.
-- Review before production. Apply only after creating a Supabase project.
create extension if not exists pgcrypto;

create type public.seller_type as enum ('private', 'dealer');
create type public.listing_status as enum ('draft', 'trial', 'active', 'expired', 'suspended', 'sold');
create type public.payment_status as enum ('pending', 'paid', 'failed', 'refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  seller_type public.seller_type not null default 'private',
  phone text,
  town text,
  postcode_prefix text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.vehicles (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references auth.users(id) on delete cascade,
  make text not null,
  model text not null,
  derivative text,
  year smallint not null check (year between 1950 and 2100),
  price_gbp integer not null check (price_gbp >= 0),
  mileage integer check (mileage is null or mileage >= 0),
  fuel_type text not null,
  transmission text,
  body_type text,
  colour text,
  description text not null,
  registration text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.listings (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid not null unique references public.vehicles(id) on delete cascade,
  seller_id uuid not null references auth.users(id) on delete cascade,
  status public.listing_status not null default 'draft',
  trial_started_at timestamptz,
  trial_ends_at timestamptz,
  paid_until timestamptz,
  published_at timestamptz,
  hidden_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.vehicle_images (
  id uuid primary key default gen_random_uuid(),
  vehicle_id uuid not null references public.vehicles(id) on delete cascade,
  storage_path text not null,
  alt_text text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  unique(vehicle_id, storage_path)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete restrict,
  seller_id uuid not null references auth.users(id) on delete restrict,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text unique,
  amount_pence integer not null default 499 check (amount_pence = 499),
  currency text not null default 'gbp' check (currency = 'gbp'),
  status public.payment_status not null default 'pending',
  period_starts_at timestamptz,
  period_ends_at timestamptz,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  reporter_email text,
  reason text not null,
  details text,
  status text not null default 'open' check (status in ('open','reviewing','resolved','dismissed')),
  created_at timestamptz not null default now()
);

create index vehicles_search_idx on public.vehicles (make, model, year, price_gbp);
create index vehicles_seller_idx on public.vehicles (seller_id);
create index listings_public_idx on public.listings (status, trial_ends_at, paid_until);
create index vehicle_images_order_idx on public.vehicle_images (vehicle_id, sort_order);

-- Enable Row Level Security.
alter table public.profiles enable row level security;
alter table public.vehicles enable row level security;
alter table public.listings enable row level security;
alter table public.vehicle_images enable row level security;
alter table public.payments enable row level security;
alter table public.reports enable row level security;

-- Profile owner may read/update their profile.
create policy "Profile owners can read own profile"
on public.profiles for select to authenticated
using (auth.uid() = id);

create policy "Profile owners can insert own profile"
on public.profiles for insert to authenticated
with check (auth.uid() = id);

create policy "Profile owners can update own profile"
on public.profiles for update to authenticated
using (auth.uid() = id) with check (auth.uid() = id);

-- Vehicle owners can manage their vehicles. Public read of active/trial vehicles
-- must be added through a carefully designed view/RPC once listing visibility
-- and RLS requirements have been tested; do not expose seller private data.
create policy "Sellers can read own vehicles"
on public.vehicles for select to authenticated
using (auth.uid() = seller_id);

create policy "Sellers can insert own vehicles"
on public.vehicles for insert to authenticated
with check (auth.uid() = seller_id);

create policy "Sellers can update own vehicles"
on public.vehicles for update to authenticated
using (auth.uid() = seller_id) with check (auth.uid() = seller_id);

create policy "Sellers can delete own vehicles"
on public.vehicles for delete to authenticated
using (auth.uid() = seller_id);

create policy "Sellers can read own listings"
on public.listings for select to authenticated
using (auth.uid() = seller_id);

create policy "Sellers can insert own listings"
on public.listings for insert to authenticated
with check (auth.uid() = seller_id);

create policy "Sellers can update own listings"
on public.listings for update to authenticated
using (auth.uid() = seller_id) with check (auth.uid() = seller_id);

create policy "Sellers can read own images"
on public.vehicle_images for select to authenticated
using (exists (select 1 from public.vehicles v where v.id = vehicle_id and v.seller_id = auth.uid()));

create policy "Sellers can manage own images"
on public.vehicle_images for all to authenticated
using (exists (select 1 from public.vehicles v where v.id = vehicle_id and v.seller_id = auth.uid()))
with check (exists (select 1 from public.vehicles v where v.id = vehicle_id and v.seller_id = auth.uid()));

create policy "Sellers can read own payments"
on public.payments for select to authenticated
using (auth.uid() = seller_id);

-- Payments are written by trusted server/webhook code only; no client insert/update policies.
-- Reports are submitted via a validated server endpoint or restricted RPC, not arbitrary client writes.

-- Recommended follow-up: create a Supabase Storage bucket for vehicle images,
-- and add storage.objects policies scoped to a seller-owned vehicle directory.
