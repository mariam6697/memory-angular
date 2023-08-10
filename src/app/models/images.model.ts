export interface IImageMeta {
  name: string;
  slug: string;
  tags: string[];
  type: string;
  uuid: string;
  space: string;
  author: any;
  locale: string;
  excerpt: string;
  private: boolean;
  targets: string[];
  category: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  unpublish_at: string;
  version_type: string;
  category_name: string;
  category_slug: string;
  available_locales: string[];
}

export interface IImageFields {
  image: IImage;
}

export interface IImage {
  url: string;
  tags: string[];
  uuid: string;
  title: string;
  alt_text: string;
  description: string;
  content_type: string;
}

export interface IImageData {
  meta: IImageMeta;
  fields: IImageFields;
}
