'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/type/product.interface';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  name: string;
  values: Testimonial[];
};

const CourseTestimonials = ({ name, values }: Props) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <h2 className='text-xl font-semibold md:mb-4 md:text-xl font-bangla'>{name}</h2>

      <div className='relative w-full'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
        >
          <CarouselContent className=''>
            {values.map((item, index) => (
              <CarouselItem key={index} className='md:basis-1/2 pt-4'>
                <div className='p-1 w-full h-full'>
                  <div className='border p-5 rounded-md relative min-h-[350px] h-full flex flex-col'>
                    <div className='absolute -top-5 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-40'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='10'
                          height='10'
                          fill='none'
                          viewBox='0 0 20 30'
                        >
                          <path
                            fill='#D33242'
                            d='M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z'
                          ></path>
                        </svg>
                      </div>

                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='10'
                          height='10'
                          fill='none'
                          viewBox='0 0 20 30'
                        >
                          <path
                            fill='#D33242'
                            d='M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z'
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className='flex-1 flex flex-col'>
                      {item.video_url ? (
                        <div className='relative flex-1 min-h-[180px] max-h-[220px]'>
                          {playingIndex === index ? (
                            <iframe
                              width='100%'
                              height='100%'
                              className='w-full h-full rounded-md'
                              src={`https://www.youtube.com/embed/${item.video_url}?autoplay=1`}
                              title='YouTube video player'
                              allow='autoplay; encrypted-media'
                              allowFullScreen
                            />
                          ) : (
                            <>
                              <Image
                                src={item.thumb!}
                                alt={item.name}
                                width={500}
                                height={300}
                                className='w-full h-full object-cover rounded-md'
                              />
                              <div
                                className='absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer rounded-md z-20'
                                onClick={() => setPlayingIndex(index)}
                              >
                                <div className='bg-white/50 rounded-full size-16 text-primary flex justify-center items-center'>
                                  <Play
                                    strokeWidth={3}
                                    className='bg-white rounded-full p-2 size-10 text-red-600'
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className='flex-1'>
                          <p
                            className={cn(
                              'font-bangla text-sm text-gray-700 leading-6 transition-all duration-300',
                              expandedIndexes.includes(index)
                                ? 'line-clamp-none'
                                : 'line-clamp-7 md:line-clamp-5'
                            )}
                          >
                            {item.testimonial}
                          </p>

                          {item.testimonial.length > 100 && (
                            <Button
                              onClick={() => toggleExpanded(index)}
                              variant={'link'}
                              className='p-0 mt-2'
                            >
                              {expandedIndexes.includes(index) ? 'Show less' : 'Show more'}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className='mt-4 flex items-center gap-5'>
                      <Image
                        src={item.profile_image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className='rounded-full'
                      />

                      <div>
                        <h3 className='text-lg'>{item.name}</h3>
                        <p className='text-sm text-gray-400'>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </Carousel>
      </div>
    </div>
  );
};

export default CourseTestimonials;
