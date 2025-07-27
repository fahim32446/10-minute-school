'use client';

import { MediaItem } from '@/type/product.interface';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  media: MediaItem[];
};

const ProductGallery = ({ media }: Props) => {
  const gallery = media.filter((ctx) => ctx.name === 'preview_gallery');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentItem = gallery[currentIndex];
  const isImage = currentItem?.resource_type === 'image';
  const currentUrl = isImage ? currentItem?.resource_value : currentItem?.thumbnail_url;

  const handlePrev = () => {
    setIsPlaying(false);
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsPlaying(false);
    if (currentIndex < gallery.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div>
      <div className='h-[210px] relative'>
        {currentIndex > 0 && (
          <ArrowLeft
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow cursor-pointer z-10 select-none'
            onClick={handlePrev}
          />
        )}

        {currentIndex < gallery.length - 1 && (
          <ArrowRight
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow cursor-pointer z-10 select-none'
            onClick={handleNext}
          />
        )}

        {currentUrl && (
          <div className='w-full h-full relative'>
            {currentItem.resource_type === 'video' && isPlaying ? (
              <iframe
                width='100%'
                height='100%'
                className='w-full h-full rounded-md'
                src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1`}
                title='YouTube video player'
                allow='autoplay; encrypted-media'
                allowFullScreen
              ></iframe>
            ) : (
              <>
                {/* Show image/thumbnail */}
                <Image
                  src={currentUrl!}
                  alt='product image'
                  width={500}
                  height={500}
                  className='w-full h-full object-fill'
                />
                {currentItem.resource_type === 'video' && (
                  <div
                    className='absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer'
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className='bg-white/50 rounded-full p-2 size-10 text-primary' />
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className='flex gap-2 mt-2 overflow-x-auto mx-3 scrollbar-hide'>
        {gallery.map((item, index) => {
          const thumbUrl =
            item.resource_type === 'image' ? item.resource_value : item.thumbnail_url;

          return (
            <div
              key={index}
              className={`cursor-pointer m-1 rounded-md ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className='relative w-12 h-9'>
                <Image
                  src={thumbUrl!}
                  alt='product thumbnail'
                  width={50}
                  height={50}
                  className='object-cover rounded-md w-full h-full'
                />
                {item.resource_type === 'video' && (
                  <div className='absolute inset-0 bg-black/30 flex items-center justify-center rounded-md'>
                    <Play className='bg-white/50 rounded-full p-1 size-5' />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
