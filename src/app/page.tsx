import CourseAbout from '@/components/page-components/course/course-about';
import ContentPreview from '@/components/page-components/course/course-content-preview';
import CourseFaq from '@/components/page-components/course/course-faq';
import FeatureExplanations from '@/components/page-components/course/course-feature-explanations';
import CourseFeatures from '@/components/page-components/course/course-features';
import CourseInstructor from '@/components/page-components/course/course-instructor';
import CourseLearning from '@/components/page-components/course/course-learning';
import CourseNavigation from '@/components/page-components/course/course-navigation';
import CourseRequirement from '@/components/page-components/course/course-requirement';
import CourseTestimonials from '@/components/page-components/course/course-testimonials';
import GroupJoin from '@/components/page-components/course/group-join';
import ProductPageHero from '@/components/page-components/product/product-hero-section';
import ProductSidebar from '@/components/page-components/product/product-sidebar';
import { fetchRequest } from '@/lib/fetchApis';
import { CourseResponse } from '@/type/product.interface';
import { Metadata } from 'next';
import Head from 'next/head';

export async function generateMetadata(): Promise<Metadata> {
  const result = await fetchRequest<CourseResponse>(
    `discovery-service/api/v1/products/ielts-course`
  );

  const data = result?.data.seo;

  const title = data.title || 'IELTS Course';
  const description = data.description || '';
  const ogImage = data?.defaultMeta?.find((meta) => meta.value === 'og:image')?.content;
  const ogUrl = data?.defaultMeta?.find((meta) => meta.value === 'og:url')?.content;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
      url: ogUrl,
    },
    keywords: data?.keywords || [],
  };
}

const page = async () => {
  const result = await fetchRequest<CourseResponse>(
    `discovery-service/api/v1/products/ielts-course`
  );

  const data = result?.data;

  const seo = result?.data.seo;
  const schemas =
    seo?.schema?.filter((s) => s.type === 'ld-json' && s.meta_value)?.map((s) => s.meta_value) ||
    [];

  return (
    <div>
      <Head>
        {schemas?.map((schema, index) => (
          <script
            key={index}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: schema }}
          />
        ))}
      </Head>

      <ProductPageHero
        title={data.title}
        description={data.description}
        media={data.media}
        checklist={data.checklist}
      />

      <div className='flex container md:pr-0! justify-between'>
        <div className='w-full md:max-w-[calc(100%_-_348px)]! lg:max-w-[calc(100%_-_430px)]!'>
          <CourseNavigation section={data.sections} />

          <div className='space-y-5 mt-10'>
            {data?.sections?.map((section, index) => (
              <div key={index} id={section.type} className='mb-8 scroll-mt-20'>
                {section.type === 'instructors' && (
                  <CourseInstructor values={section.values} name={section.name} />
                )}
                {section.type === 'features' && (
                  <CourseFeatures values={section.values} name={section.name} />
                )}

                {section.type === 'group_join_engagement' && <GroupJoin values={section.values} />}
                {section.type === 'pointers' && (
                  <CourseLearning values={section.values} name={section.name} />
                )}

                {section.type === 'content_preview' && <ContentPreview name={section.name} />}
                {section.type === 'about' && (
                  <CourseAbout name={section.name} values={section.values} />
                )}
                {section.type === 'feature_explanations' && (
                  <FeatureExplanations name={section.name} values={section.values} />
                )}
                {/* {section.type === 'free_items' && <CourseFreeItem name={section.name} />} */}

                {section.type === 'testimonials' && (
                  <CourseTestimonials name={section.name} values={section.values} />
                )}

                {section.type === 'requirements' && (
                  <CourseRequirement name={section.name} values={section.values} />
                )}
                {section.type === 'faq' && (
                  <CourseFaq name={section.name} values={section.values} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <ProductSidebar
            title={data.title}
            description={data.description}
            media={data.media}
            checklist={data.checklist}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
