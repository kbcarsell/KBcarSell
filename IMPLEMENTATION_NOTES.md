# Backend implementation notes

## Trial and paid visibility rules

A listing is visible only when its state is `trial` and `trial_ends_at > now()`, or `active` and `paid_until > now()`. Enforce this in server queries/RPCs, not only in front-end code.

- On first publish: set `trial_started_at = now()`, `trial_ends_at = now() + interval '7 days'`, status `trial`.
- At trial expiry with no successful payment: set status `expired`, set `hidden_at`, keep the row for seller access/renewal.
- On successful one-off payment verified by Stripe webhook: set status `active`, `paid_until = greatest(coalesce(paid_until, now()), now()) + interval '30 days'` (make webhook idempotent and use the paid period semantics approved for product).
- Never trust a client redirect as proof of payment.
- Do not create a Stripe subscription or attach automatic recurring billing.
- Keep Stripe secret keys server-side only.

## Stripe checkout

Create Checkout Sessions on the server with `mode: "payment"`, `currency: "gbp"`, `unit_amount: 499`, and metadata containing the listing ID and seller ID. Validate the logged-in user owns the listing. Use a webhook endpoint and verify its signature with `STRIPE_WEBHOOK_SECRET`. Make webhook processing idempotent using the unique Checkout Session ID.

## Email reminders

Add a scheduled job (for example Vercel Cron) to find trials ending soon and send one reminder. Track sent reminders to avoid duplicates. A reminder is not implemented in the current front-end starter.

## Security

- Use Supabase Row Level Security and test it with multiple users.
- Never expose the service role key to the browser.
- Validate and limit image types and sizes; strip EXIF where appropriate.
- Rate-limit authentication, contact and report endpoints.
- Add moderation tools, seller reporting, backups and error monitoring.
