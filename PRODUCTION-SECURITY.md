# Production Security Notes

- Never commit `.env.local`, Razorpay secrets, Supabase service-role keys, passwords, or webhook secrets.
- Only public Supabase variables may use the `NEXT_PUBLIC_` prefix.
- Razorpay secret and webhook secret must remain server-side.
- Do not put service-role credentials in client components.
- Admin access must be controlled by the protected admin field/policy from Part 7.
- Verification must only be changed through the protected admin flow.
- Keep Supabase RLS enabled.
- Use HTTPS in production.
- Test Razorpay in Test Mode before switching to live credentials.
