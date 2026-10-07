# Handora Connects — Part 8: Production & Vercel

Final deployment checklist and production safety files.

## Before deployment
1. Merge Parts 1–7 into one project.
2. Run `npm install`.
3. Run all Supabase SQL migrations in order:
   Part 3 → Part 4 → Part 5 → Part 7.
4. Configure production environment variables in Vercel.
5. Configure Razorpay production keys and webhook URL.
6. Run `npm run build`.
7. Deploy the project root to Vercel.

## Vercel 404 prevention
- Import the repository root, not a subfolder.
- Framework Preset: Next.js.
- Do not set a custom Output Directory.
- Build Command: `npm run build`.
- Install Command: `npm install`.
- Ensure `app/page.tsx` exists.
- Ensure `package.json` contains the Next.js scripts.
- Keep `proxy.ts` at the project root.
- Redeploy after changing environment variables.

## Environment variables
Use `.env.production.example` as the checklist. Never commit real secrets.

## Domain
After deployment, add the custom domain in Vercel and update Supabase Auth URL/redirect settings and Razorpay webhook URL to the production domain.

## Final verification
Test:
- /
- /login
- /register
- /marketplace
- /subscription
- /dashboard
- /profile
- /admin
- creator service creation
- login/logout
- password reset
- Razorpay test/production subscription flow
- Razorpay webhook
- mobile layout
