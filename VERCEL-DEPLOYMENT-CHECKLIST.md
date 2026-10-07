# Handora Connects — Vercel Checklist

## GitHub
- Repository contains the extracted project files.
- `package.json` is in repository root.
- No `.env.local` or real API secrets are committed.

## Vercel
- Select the GitHub repository.
- Root Directory = project root.
- Framework = Next.js.
- Build = `npm run build`.
- Install = `npm install`.
- Output Directory = leave default.
- Add all production environment variables.
- Deploy.

## Supabase
Set the production Site URL to your real domain.
Add the production authentication redirect/callback URL.

## Razorpay
Use production credentials only after production setup is ready.
Webhook:
`https://YOUR-DOMAIN.com/api/razorpay/webhook`

Keep the webhook secret private.

## After deployment
Open the Vercel deployment URL and test:
1. Homepage
2. Register
3. Login
4. Dashboard
5. Marketplace
6. Creator service creation
7. Subscription
8. Admin panel
9. Logout

If a page returns 404, verify that its matching `app/.../page.tsx` exists in the repository and that Vercel deployed the correct repository root.
