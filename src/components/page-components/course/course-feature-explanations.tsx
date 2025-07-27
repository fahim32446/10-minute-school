import { FeatureExplanationItem } from '@/type/product.interface';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  values: FeatureExplanationItem[];
};

const FeatureExplanations = ({ name, values }: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold md:mb-4 md:text-xl font-bangla'>{name}</h2>

      <div className='grid grid-cols-1 px-5 border divide-y rounded-md'>
        {values.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-start justify-between gap-3 py-5 md:flex-row'
          >
            <div className='flex flex-col gap-2'>
              <h2 className='text-sm font-medium leading-[30px] text-[#111827] md:text-base font-bangla'>
                {item.title}
              </h2>
              {item.checklist.map((point, index) => (
                <div key={index} className='flex flex-row items-center gap-5'>
                  <Check size={18} className='text-[#6294F8]' />
                  <p className='text-sm font-normal leading-[24px] text-[#4B5563] md:text-base  font-bangla'>
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {item.file_type === 'image' && (
                <div className='mb-4 mx-auto max-w-[350px]'>
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    width={250}
                    height={200}
                    loading='lazy'
                    className='mx-auto'
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureExplanations;
