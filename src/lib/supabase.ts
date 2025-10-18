import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  },
  global: {
    fetch: (url, options = {}) => {
      // Handle SSL certificate issues in development
      if (process.env.NODE_ENV === 'development') {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      }
      return fetch(url, options);
    }
  }
})
