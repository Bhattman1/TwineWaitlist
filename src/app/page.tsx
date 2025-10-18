'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const error = await response.json();
        alert(error.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-twine-primary flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-twine-primary rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-twine-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-twine-text mb-4 sm:mb-6">Welcome to Twine!</h1>
          <p className="text-twine-text-dark text-base sm:text-lg mb-6 sm:mb-8 px-4">
            You&apos;ve successfully joined our waitlist. We&apos;ll notify you as soon as we launch!
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
              }}
              style={{
                backgroundColor: '#6FC588',
                color: '#761718',
                fontFamily: 'Inter, system-ui, sans-serif',
                width: '320px',
                height: '64px'
              }}
              className="inline-flex items-center justify-center w-80 px-6 py-8 font-bold rounded-full border-0 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-twine-primary flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full text-center">
        {/* Main content */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-twine-text mb-4 sm:mb-6 tracking-tight">
            twine.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-twine-text-dark mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            Something amazing is coming. Be the first to know when we launch.
          </p>
        </div>

        {/* Email form */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Input field */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                dir="ltr"
                style={{ width: '250px', height: '48px', textAlign: 'left', paddingLeft: '24px' }}
                className="w-80 pr-6 py-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-twine-text placeholder-twine-primary focus:outline-none focus:border-white/40 focus:bg-white/15 focus:ring-4 focus:ring-white/10 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl"
                required
              />
            </div>
            <div style={{ height: '24px' }} aria-hidden="true"></div>
            
            {/* Submit button */}
            <div className="flex items-center justify-center gap-4" style={{ marginTop: '0px' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  backgroundColor: '#6FC588',
                  color: '#761718',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  width: '280px',
                  height: '48px'
                }}
                className="inline-flex items-center justify-center w-80 px-6 py-8 font-bold rounded-full border-0 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div 
                      className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                      style={{ borderColor: '#761718 #761718 #761718 transparent' }}
                    ></div>
                    <span>Joining...</span>
                  </div>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>
            
            {/* Subtle hint text */}
            <p className="text-center text-white/50 text-sm mt-4">
              Be the first to experience something amazing
            </p>
          </form>
        </div>

        {/* Additional info */}
       

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-twine-text/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-twine-text/4 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
    </div>
  );
}