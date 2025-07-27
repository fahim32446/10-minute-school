'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Error caught in error.tsx:', error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-4xl font-bold text-red-600'>Something went wrong!</h1>
      <p className='text-gray-700 mt-2'>{error.message}</p>
      <button
        onClick={() => reset()}
        className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
      >
        Try Again
      </button>
    </div>
  );
}
