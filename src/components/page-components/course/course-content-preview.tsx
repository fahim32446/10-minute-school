'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Lock, PlayCircle } from 'lucide-react';
import React from 'react';

interface ICourseLessonProps {
  icon: React.ElementType;
  title: string;
  statusText?: string;
  isLocked?: boolean;
}

const CourseLesson = ({ icon: Icon, title, statusText, isLocked = false }: ICourseLessonProps) => (
  <div className='flex justify-between items-center py-1 px-2 rounded-md hover:bg-gray-100 transition-colors duration-150'>
    <div className='flex items-center space-x-3'>
      <Icon size={20} className={isLocked ? 'text-gray-400' : 'text-green-500'} />
      <span className={isLocked ? 'text-gray-500' : 'text-gray-800'}>{title}</span>
    </div>
    <span className={isLocked ? 'text-gray-400' : 'text-green-500'}>{statusText}</span>
  </div>
);

interface IProps {
  name: string;
}

const ContentPreview = ({ name }: IProps) => {
  // This is a dummy data which not came from the server.
  // BUT In a real application, we would fetch this data from an API or server.

  const allSections = [
    {
      id: 'intro',
      title: 'Introduction',
      defaultOpen: true,
      content: (
        <div className='space-y-2'>
          <CourseLesson
            icon={PlayCircle}
            title='Video: IELTS: Introduction'
            statusText='ফ্রি দেখুন'
          />
          <CourseLesson icon={PlayCircle} title='Video: IELTS: Overview' statusText='ফ্রি দেখুন' />
          <CourseLesson
            icon={PlayCircle}
            title='Video: How to Prepare for IELTS?'
            statusText='ফ্রি দেখুন'
          />
          <CourseLesson
            icon={PlayCircle}
            title='Video: Making a Daily Routine'
            statusText='ফ্রি দেখুন'
          />
          <CourseLesson
            icon={Lock}
            title='Video: Different Sentence Structures to Improve Writing'
            isLocked
          />
          <CourseLesson icon={Lock} title='IELTS General Facts' isLocked />
          <CourseLesson icon={Lock} title='IELTS Vocabulary' isLocked />
        </div>
      ),
    },
    {
      id: 'ielts-course',
      title: 'IELTS Course by Munzereen Shahid | Exclusive Support Group',
      content: (
        <p className='text-gray-600'>
          This section covers the core IELTS course content and exclusive support.
        </p>
      ),
    },
    {
      id: 'academic-reading',
      title: 'Academic Reading',
      content: (
        <p className='text-gray-600'>Dive deep into academic reading strategies and practice.</p>
      ),
    },
  ];

  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold md:text-xl font-bangla'>{name}</h2>
      <div className='border p-2 rounded-lg overflow-hidden'>
        <div className='w-full  '>
          <Accordion type='single' defaultValue={'intro'} className='w-full px-3'>
            {allSections.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className='text-left font-semibold'>
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className='mb-5'>{section.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ContentPreview;
