import { Instructor } from '@/type/product.interface';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  values: Instructor[];
  name: string;
};

const CourseInstructor = ({ values, name }: Props) => {
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold md:text-2xl font-bangla'>{name}</h2>

      {values.map((instructor) => (
        <div key={instructor.name} className='mb-6 border p-3 py-5'>
          <div className='flex items-center space-x-4'>
            <Image
              src={instructor.image}
              alt={instructor.name}
              width={100}
              height={100}
              className='rounded-full'
            />
            <div>
              {instructor.slug ? (
                <div className='flex items-center gap-1'>
                  <Link href={instructor.slug} className='text-lg font-semibold hover:text-primary'>
                    {instructor.name}
                  </Link>
                  <span>
                    <ChevronRight className='size-4' />
                  </span>
                </div>
              ) : (
                <h3 className='text-lg font-semibold '>{instructor.name}</h3>
              )}
              <div
                className='text-sm text-gray-600'
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
