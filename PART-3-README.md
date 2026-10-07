# Handora Connects — Part 3

Adds real Supabase email/password authentication, Customer/Creator roles,
automatic profiles, PostgreSQL + RLS, protected dashboard, logout,
profile editing, and password reset.

1. Run: `npm install @supabase/ssr @supabase/supabase-js`
2. Create a Supabase project.
3. Run `supabase/schema.sql` in Supabase SQL Editor.
4. Copy `.env.example` to `.env.local` and fill the two variables.
5. Merge these files into Parts 1 and 2.
6. Remove Part 2's old `middleware.ts`; Next.js 16 uses root `proxy.ts`.
7. Add your auth callback URL: `https://YOUR-DOMAIN.com/auth/callback`.
8. Run `npm run build` before Vercel deployment.

Do not commit `.env.local` or any service-role/secret key.

Verification badges are intentionally not editable in Part 3; admin verification
will be added in Part 7.

Official current Supabase Next.js guidance:
https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
