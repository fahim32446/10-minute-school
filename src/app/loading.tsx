import { Loader } from 'lucide-react';
import React from 'react';

const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Loader className='animate-spin' />
    </div>
  );
};

export default loading;
