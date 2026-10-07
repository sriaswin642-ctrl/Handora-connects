# Handora Connects — Part 7: Admin Panel

1. Run `supabase/part-7-admin.sql`.
2. Set your admin account in Supabase:
   `update public.profiles set is_admin = true where id = 'YOUR_USER_UUID';`
3. Copy the files into the project root.
4. Append `app/admin/admin.css` to `app/globals.css`.
5. Run `npm run build`.

Admin features: dashboard statistics, user verification, service overview, and subscription overview.
Never expose a Supabase service-role key in browser code.
