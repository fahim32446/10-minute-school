import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GroupJoinEngagement } from '@/type/product.interface';
import Image from 'next/image';
import React from 'react';

type Props = {
  values: GroupJoinEngagement[];
};

const GroupJoin = ({ values }: Props) => {
  return values?.map((item, index) => (
    <div
      key={index}
      style={{
        backgroundImage: `url(${item.background.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 mt-10'
    >
      <div className='w-full md:w-1/2'>
        <Image
          src={item.top_left_icon_img}
          alt={'Download icon'}
          width={180}
          height={40}
          className='mb-4'
        />
        <h2 className='text-xl font-semibold' style={{ color: item.title_color }}>
          {item.title}
        </h2>
        <p className={cn('mt-2 text-sm')} style={{ color: item.description_color }}>
          {item.description}
        </p>
        <Button className='mt-6 button primary border-b-4 border-[rgba(0,0,0,.3)]' size={'lg'}>
          {item.cta.text}
        </Button>
      </div>

      <div className='items-center hidden w-1/2 md:flex'>
        <Image src={item.thumbnail} alt={'banner'} width={1000} height={1000} />
      </div>
    </div>
  ));
};

export default GroupJoin;
