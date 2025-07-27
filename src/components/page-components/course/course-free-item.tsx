import React from 'react';

type Props = {
  name: string;
};

const CourseFreeItem = ({ name }: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold md:mb-4 md:text-xl font-bangla'>{name}</h2>
      NO DATA AVAILABLE IN API
    </div>
  );
};

export default CourseFreeItem;
