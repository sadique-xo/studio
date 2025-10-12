import type { SiteSettings, Project, Testimonial } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const siteSettings: SiteSettings = {
  title: 'Sadique.co',
  tagline: 'Web Design for Premium Real Estate & Airbnb',
  contactEmail: 'hello@sadique.co',
  socialLinks: {
    twitter: '#',
    linkedin: '#',
    github: '#'
  },
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'The Glass House',
    slug: 'the-glass-house',
    description: 'A full-fledged website design for a luxury villa, focusing on immersive visuals and a seamless booking experience. The design highlights the unique architectural features and stunning location.',
    shortDescription: 'Modern web presence for a luxury villa.',
    images: [getImage('project-1-gallery-1'), getImage('project-1-gallery-2')],
    coverImage: getImage('project-1-cover'),
    tags: ['Web Design', 'Real Estate', 'Luxury'],
    location: 'Malibu, California',
    published: true,
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2023-05-20'),
  },
  {
    id: '2',
    title: 'Downtown Loft',
    slug: 'downtown-loft',
    description: 'A stylish and modern website for a chic downtown Airbnb loft. The project involved creating a brand identity and a mobile-first design to attract urban travelers.',
    shortDescription: 'Chic booking site for an urban Airbnb.',
    images: [getImage('project-2-gallery-1'), getImage('project-2-gallery-2')],
    coverImage: getImage('project-2-cover'),
    tags: ['Branding', 'Web Design', 'Airbnb'],
    location: 'New York City, NY',
    published: true,
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2023-08-10'),
  },
  {
    id: '3',
    title: 'Seaside Escape',
    slug: 'seaside-escape',
    description: 'A serene and elegant website for a beachfront property rental. The focus was on high-quality photography and a calming user interface to reflect the tranquil location.',
    shortDescription: 'Elegant rental site for a beachfront property.',
    images: [getImage('project-3-gallery-1'), getImage('project-3-gallery-2')],
    coverImage: getImage('project-3-cover'),
    tags: ['Web Design', 'Booking Platform', 'React'],
    location: 'The Hamptons, NY',
    published: true,
    createdAt: new Date('2023-11-22'),
    updatedAt: new Date('2023-11-28'),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane Doe',
    role: 'Real Estate Developer',
    quote: 'Sadique.co transformed our online presence. Their attention to detail and understanding of the luxury market is unmatched. Our bookings have increased by 40% since the new site launch.',
    avatarUrl: getImage('testimonial-avatar-1'),
    sourceLink: '#',
    createdAt: new Date('2023-06-01'),
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Airbnb Superhost',
    quote: 'Working with them was a breeze. They delivered a stunning, fast, and easy-to-manage website that truly captures the essence of my property. I couldn\'t be happier with the result.',
    avatarUrl: getImage('testimonial-avatar-2'),
    createdAt: new Date('2023-09-15'),
  },
];
