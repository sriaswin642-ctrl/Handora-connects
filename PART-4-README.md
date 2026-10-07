# Handora Connects — Part 4: Marketplace

## Adds
- Creator service listings
- Categories
- Marketplace search
- Category filtering
- Service detail pages
- Creator-only service publishing
- PostgreSQL RLS for service ownership
- Public active listings
- Responsive marketplace UI

## Install / merge
Part 4 builds on Parts 1–3.

1. Run:
   `npm install`
2. Run `supabase/part-4-marketplace.sql` in Supabase SQL Editor after Part 3 schema.
3. Copy the Part 4 `app` and `supabase` files into the project.
4. Append `app/marketplace.css` to `app/globals.css`.
5. Run `npm run build`.

## Important
The marketplace intentionally does not collect customer/creator service transaction money. The price shown is the creator's listed service price. Subscription and platform monetization are handled in Part 5.

The "Connect with creator" button is only a navigation placeholder in Part 4. Messaging/connection workflows will be expanded later.

## Security
Creators can insert/update/delete only their own services through RLS. Customers and unauthenticated visitors can read active services. A creator role is required to publish a service.

## Routes
- `/marketplace`
- `/marketplace/new`
- `/marketplace/[id]`

## Next
Part 5: Razorpay subscription plans and platform payment flow.
