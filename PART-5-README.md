# Handora Connects - Part 5
Razorpay subscription foundation.

Install:
npm install razorpay

Run supabase/part-5-subscriptions.sql in Supabase.

Add these Vercel/server-only variables:
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
RAZORPAY_WEBHOOK_SECRET
SUPABASE_SERVICE_ROLE_KEY

Configure Razorpay webhook:
https://YOUR-DOMAIN.com/api/razorpay/webhook

Test in Razorpay Test Mode first. Never commit secrets to GitHub.
This part handles platform subscriptions only, not customer-to-creator service payments.
