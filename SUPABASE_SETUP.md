# 🚀 Supabase Setup Guide for Twine Waitlist

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up/login with GitHub
4. Click "New Project"
5. Choose your organization
6. Fill in:
   - **Name**: `twine-waitlist`
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to your users
7. Click "Create new project"

## Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xyz.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

## Step 3: Update Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

## Step 4: Create the Waitlist Table

1. In Supabase dashboard, go to **Table Editor**
2. Click "Create a new table"
3. Fill in:
   - **Name**: `waitlist`
   - **Description**: `Email waitlist for Twine`
4. Add these columns:
   - `id` (int8, primary key, auto-increment)
   - `email` (text, unique, not null)
   - `created_at` (timestamptz, default: now())
5. Click "Save"

## Step 5: Test It!

1. Restart your dev server: `npm run dev`
2. Submit an email on your website
3. Check `/api/admin` to see the stored emails
4. Check your Supabase table to confirm data is there

## 🎉 You're Done!

Your waitlist now works in production! Emails are stored in a real database and will persist when you deploy to Vercel, Netlify, or any other platform.

## 📊 View Your Data

- **Supabase Dashboard**: Real-time data viewer
- **API Endpoint**: `http://localhost:3000/api/admin`
- **Table Editor**: Manage data directly in Supabase
