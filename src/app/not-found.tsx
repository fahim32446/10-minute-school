import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-5xl font-bold text-red-600'>404</h1>
      <p className='text-xl mt-2 text-gray-700'>Oops! Page not found.</p>
      <p className='text-sm text-gray-500 mt-1'>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href='/'
        className='mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
      >
        Go to Homepage
      </Link>
    </div>
  );
}
