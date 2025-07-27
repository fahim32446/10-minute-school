export type CourseResponse = {
  code: number;
  data: CourseData;
  message: string;
  status_code: number;
};

export type MediaItem = {
  name: 'preview_gallery' | 'sqr_img' | 'thumbnail';
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
};

export type ChecklistItem = {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
};

export type CTA = {
  name: string;
  value: string;
};

export type OfferValue = {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
};

export type Instructor = {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
};

export type FeatureItem = {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
};

export type GroupJoinEngagement = {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
};

export type PointerItem = {
  color: string;
  icon: string;
  id: string;
  text: string;
};

export type AboutItem = {
  description: string;
  icon: string;
  id: string;
  title: string;
};

export type FeatureExplanationItem = {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
};

export type Testimonial = {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb?: string;
  video_type: string;
  video_url: string;
};

export type Faq = { answer: string; id: string; question: string };

export type Section =
  | {
      type:
        | 'bundle_items'
        | 'content_preview'
        | 'free_items'
        | 'certificate'
        | 'bundle_certificate'
        | 'requirements'
        | 'faq';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: unknown[];
    }
  | {
      type: 'offers';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: OfferValue[];
    }
  | {
      type: 'instructors';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: Instructor[];
    }
  | {
      type: 'features';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: FeatureItem[];
    }
  | {
      type: 'group_join_engagement';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: GroupJoinEngagement[];
    }
  | {
      type: 'pointers';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: PointerItem[];
    }
  | {
      type: 'about';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: AboutItem[];
    }
  | {
      type: 'feature_explanations';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: FeatureExplanationItem[];
    }
  | {
      type: 'testimonials';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: Testimonial[];
    }
  | {
      type: 'faq';
      name: string;
      description: string;
      bg_color: string;
      order_idx: number;
      values: Faq[];
    };

export type CourseData = {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: {
    defaultMeta: MetaTag[];
    description: string;
    keywords: string[];
    schema: SchemaEntry[];
    title: string;
  };
  cta_text: CTA;
  sections: Section[];
};

export type MetaTag = {
  content: string;
  type: 'name' | 'property';
  value: string;
};

export type SchemaEntry = {
  meta_name: 'ld-json';
  meta_value: string;
  type: 'ld-json';
};
