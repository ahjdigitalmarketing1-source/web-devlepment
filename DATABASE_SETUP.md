# AHJ Agency — Online Database Setup

The five-page website is frontend-ready. To make contact inquiries save online, connect the form to Supabase (recommended) or another hosted backend.

Suggested table:
- id: uuid primary key
- name: text
- phone: text
- email: text
- message: text
- created_at: timestamp

The current WhatsApp form works immediately. Online database storage requires your Supabase project URL and anon key, which should be added to the JavaScript integration before deployment.
