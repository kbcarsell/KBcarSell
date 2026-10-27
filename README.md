# KBcarSell — starter project

An English-language UK car marketplace starter built with Next.js, TypeScript and CSS. The current deliverable is a responsive front-end foundation with sample vehicle cards and project pages.

## Important current status

This is **not yet a live marketplace**. Sample listings are illustrative. Authentication, persistent listings, image uploads, trial expiry, email reminders, Stripe payment creation/webhooks, moderation and production policies must be implemented/configured before accepting users or money.

## Prerequisites

- Node.js 20.9 or newer
- npm
- Optional for the next phase: Supabase account, Stripe account, Vercel account, domain registrar account

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The front-end currently works without environment variables. Do not deploy public payments until Stripe test-mode integration and server-side webhook verification are implemented.

## Deploying a preview

1. Put this folder in a private Git repository.
2. Import the repository into Vercel.
3. Deploy the front-end preview.
4. Connect a domain only after confirming domain and trademark availability.

## Planned next milestones

1. Supabase project, schema, Row Level Security policies and authentication.
2. Seller dashboard and real create/edit/archive listing forms.
3. Image uploads to private/public Supabase Storage with file validation.
4. 7-day trial lifecycle, background expiry job and reminder emails.
5. Stripe Checkout for one-off GBP 4.99 payments and verified webhook handling.
6. Admin moderation, reporting, abuse controls and seller contact privacy.
7. Final privacy notice, terms, cookie controls, support process and launch checks.

## Intended billing rules

- A new listing has a 7-day trial.
- The seller must actively pay £4.99 to continue for 30 days.
- No subscription and no automatic charge.
- Payment success must be verified on the server using a Stripe webhook.
- Unpaid/expired listings become hidden but are retained for a defined grace/retention period.
