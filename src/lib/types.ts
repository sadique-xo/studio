export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
  coverImage: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
  location: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  seo?: {
    title: string;
    description: string;
    ogImage?: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
  sourceLink?: string;
  createdAt: Date;
};

export type SiteSettings = {
  title: string;
  tagline: string;
  contactEmail: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};
