import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AboutItem } from '@/type/product.interface';
import React from 'react';

type Props = {
  name: string;
  values: AboutItem[];
};

const CourseAbout = ({ name, values }: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold md:mb-4 md:text-2xl font-bangla'>{name}</h2>
      <div className='border p-2 rounded-lg overflow-hidden'>
        <Accordion type='multiple' className='w-full  px-3'>
          {values?.map((item, index) => (
            <AccordionItem value={String(index)} key={index}>
              <AccordionTrigger>
                <div
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className='font-bangla font-medium md:text-base mx-lg:text-sm'
                />
              </AccordionTrigger>
              <AccordionContent className='px-0 pb-2 text-gray-700'>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className='font-bangla prose prose-ul:pl-4 w-full!'
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseAbout;
