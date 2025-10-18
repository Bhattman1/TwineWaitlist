import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Get all emails from Supabase
    const { data: emails, error } = await supabase
      .from('waitlist')
      .select('email, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching emails:', error);
      return NextResponse.json({
        count: 0,
        emails: [],
        error: 'Failed to fetch emails'
      });
    }

    return NextResponse.json({
      count: emails?.length || 0,
      emails: emails || []
    });
  } catch (error) {
    console.error('Error in admin route:', error);
    return NextResponse.json({
      count: 0,
      emails: [],
      error: 'Something went wrong'
    });
  }
}
