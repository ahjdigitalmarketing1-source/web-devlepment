# AHJ Agency — 5 Page VIP Website + Supabase

Pages:
- index.html — Home
- services.html — Services
- packages.html — Packages
- portfolio.html — Portfolio
- contact.html — Contact

The Contact form is connected to:
https://qtmtcgzdioazupcouisl.supabase.co/rest/v1/customer_inquiries

## One-time Supabase setup
1. Open Supabase Dashboard for your project.
2. Go to SQL Editor.
3. Paste and run `SUPABASE_SETUP.sql`.
4. The website will save Name, Phone, Email, Message and Created At to `customer_inquiries`.
5. Keep the publishable key only in frontend code. Never put a Supabase service-role/secret key in HTML or JavaScript.

The contact form also opens WhatsApp after the database save succeeds.
