import React from 'react';
import ProductGallery from './product-gallery';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChecklistItem, MediaItem } from '@/type/product.interface';

type Props = {
  title: string;
  description: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
};

const ProductSidebar = ({ title, description, media, checklist }: Props) => {
  return (
    <aside className='w-full hidden md:block md:w-[330px] lg:w-[400px] md:bg-white  md:h-screen md:sticky md:-top-[250px] -mt-56 '>
      <div className=''>
        <div className='md:border md:p-1 '>
          <div
            className='md:bg-none bg-[url("/bg.jpeg")]
             md:bg-cover md:bg-center p-3 md:p-0'
          >
            <ProductGallery media={media} />
          </div>

          <div className='p-3 mt-4 space-y-4'>
            <p className='text-2xl flex items-center '>
              <span className='font-semibold'>৳3850</span>
              <span className='ml-2 line-through'>৳5000</span>
              <span className='relative inline-flex items-center bg-orange-500 text-white px-1 py-1 rounded-md shadow-lg discount-tag-shape ml-4'>
                <span className='white-dot'></span>

                <span className='text-xs font-semibold'>1150 ৳ ছাড়</span>
              </span>
            </p>
            <Button size={'lg'} className='w-full font-semibold border-b-4 border-[rgba(0,0,0,.3)]'>
              কোর্সটি কিনুন
            </Button>
            <div className='my-4'>
              <p className='text-xl font-semibold mb-3 font-bangla'>এই কোর্সে যা থাকছে</p>

              {checklist.map((item) => (
                <div key={item.id} className='flex items-center gap-4 mb-3 leading-5'>
                  <Image src={item.icon} alt='checklist icon' width={20} height={20} />
                  <span className='mb-0 inline-block tracking-[0.005em] text-[#111827] font-bangla font-medium'>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
