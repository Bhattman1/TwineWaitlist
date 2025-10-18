import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    console.log('Attempting to connect to Supabase...');
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);

    // Check if email already exists in Supabase
    const { data: existingEmails, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email);

    if (checkError) {
      console.error('Supabase error:', checkError);
      return NextResponse.json(
        { error: `Database error: ${checkError.message}` },
        { status: 500 }
      );
    }

    if (existingEmails && existingEmails.length > 0) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 400 }
      );
    }

    // Insert new email into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Successfully added email to Supabase:', email);

    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
