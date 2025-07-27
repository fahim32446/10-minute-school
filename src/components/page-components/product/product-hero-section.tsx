import { cn } from '@/lib/utils';
import { ChecklistItem, MediaItem } from '@/type/product.interface';
import Image from 'next/image';
import ProductGallery from './product-gallery';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  description: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
};

const ProductPageHero = ({ title, description, media, checklist }: Props) => {
  return (
    <section
      className={cn('min-h-[300px] bg-none md:bg-cover md:bg-center ', "md:bg-[url('/bg.jpeg')]")}
    >
      <div className='container px-0! xl:px-6! relative flex flex-col md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]'>
        <div className='flex flex-col justify-center flex-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] text-white space-y-2'>
          <h1 className='text-xl hidden md:block font-semibold  md:text-4xl'>{title}</h1>
          <div className='hidden md:flex gap-3'>
            <Image
              src={
                'https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png'
              }
              alt='start rating'
              width={130}
              height={10}
            />
            <p className='text-sm md:text-base font-bangla'>
              (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </p>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className='text-gray-400 font-bangla hidden md:block'
          />
        </div>

        <div className='md:hidden w-full bg-white'>
          <div className='bg-[url("/bg.jpeg")] bg-cover bg-center p-3'>
            <ProductGallery media={media} />
            <div className='text-white mt-5 space-y-3'>
              <h1 className='text-xl font-semibold'>{title}</h1>

              <Image
                src='https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png'
                alt='start rating'
                width={100}
                height={10}
              />
              <p className='text-sm font-bangla'>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>

              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className='text-gray-400 font-bangla'
              />
            </div>
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

            <Button size='lg' className='w-full font-semibold border-b-4 border-[rgba(0,0,0,.3)]'>
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
    </section>
  );
};

export default ProductPageHero;
