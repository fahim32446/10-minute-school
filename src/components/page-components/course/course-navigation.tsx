'use client';

import { cn } from '@/lib/utils';
import { Section } from '@/type/product.interface';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContext, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Button } from '../../ui/button';

type Props = { section: Section[] };

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Button
      variant='ghost'
      size='icon'
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className='absolute left-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50'
      aria-label='Scroll left'
    >
      <ChevronLeft className='h-4 w-4' />
    </Button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Button
      variant='ghost'
      size='icon'
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className='absolute right-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50'
      aria-label='Scroll right'
    >
      <ChevronRight className='h-4 w-4' />
    </Button>
  );
}

function CourseOption({
  option,
  isActive,
  onClick,
}: {
  option: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant='ghost'
      className={cn(
        'py-2 px-4 rounded-md text-sm font-medium transition-colors hover:text-primary whitespace-nowrap mx-2',
        isActive ? 'text-primary border-b-2 border-primary rounded-none' : 'text-muted-foreground '
      )}
      onClick={onClick}
    >
      {option}
    </Button>
  );
}

const CourseNavigation = ({ section }: Props) => {
  const [activeOption, setActiveOption] = useState('কোর্স ইন্সট্রাক্টর');

  const handleClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <div className=' w-full border-b border-gray-200 h-14 sticky top-0 bg-white'>
      <div className='px-10'>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          wrapperClassName='py-2'
          scrollContainerClassName='!scroll-smooth scrollbar-hide'
        >
          {section
            .filter((c) => c.name)
            .map((option) => (
              <CourseOption
                key={option.name}
                option={option.name}
                isActive={activeOption === option.name}
                onClick={() => {
                  handleClick(option.type);
                  setActiveOption(option.name);
                }}
              />
            ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default CourseNavigation;
