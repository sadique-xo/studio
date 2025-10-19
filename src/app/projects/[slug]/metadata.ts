import { Metadata } from 'next';
import { projects } from '@/lib/placeholder-data';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const title = `${project.title} - Web Design Project by Sadique`;
  const description = `${project.description} Located in ${project.location}. ${project.tags.join(', ')}. Professional web design services for ${project.tags.includes('Real Estate') ? 'real estate' : project.tags.includes('Airbnb') ? 'Airbnb' : 'property'} websites.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      'web design',
      'real estate website',
      'Airbnb website',
      'property website',
      'modern web design',
      'responsive design',
      project.location,
      ...project.tags
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://sadique.co/projects/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Web Design Project`,
        },
      ],
      publishedTime: project.createdAt.toISOString(),
      modifiedTime: project.updatedAt.toISOString(),
      authors: ['Sadique'],
      section: 'Web Design',
      tags: project.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.coverImage],
    },
    alternates: {
      canonical: `https://sadique.co/projects/${project.slug}`,
    },
  };
}
