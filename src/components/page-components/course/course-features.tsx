import { FeatureItem } from '@/type/product.interface';
import Image from 'next/image';
import React from 'react';

type Props = {
  values: FeatureItem[];
  name: string;
};

const CourseFeatures = ({ name, values }: Props) => {
  return (
    <div>
      <h2 className='mb-4  text-xl font-semibold leading-[30px] text-black font-bangla'>{name}</h2>
      <div className='grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
        {values.map((feature) => (
          <div key={feature.id} className='flex items-start space-x-3'>
            <div className='w-10 h-10 shrink-0'>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className='w-full h-full object-cover rounded-full border border-white/10'
              />
            </div>
            <div className='font-bangla'>
              <h3 className='text-lg font-semibold text-white mb-2'>{feature.title}</h3>
              <p className='text-sm text-gray-300'>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;
