import React from 'react';

type Props = {
  name: string;
  values: unknown[];
};
const dummyValues = ['ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)', 'স্মার্টফোন অথবা পিসি'];

const CourseRequirement = ({ name }: Props) => {
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold md:text-2xl font-bangla'>{name}</h2>
      <div className='pt-2 md:p-6 border-2 rounded-md md:border '>
        <ul>
          {dummyValues?.map((item, index) => (
            <li key={index} className='flex items-start gap-2 mb-2'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 20 20'
                aria-hidden='true'
                className='mr-1 mt-[2px]'
                style={{ color: '#6294F8' }}
                height='20'
                width='20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <div className='flex-1 font-bangla'>{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseRequirement;
