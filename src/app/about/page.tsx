import { Metadata } from 'next';
import AIContentSection from '@/components/AIContentSection';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Sadique - Professional Web Designer | Services & Expertise',
  description: 'Learn about Sadique\'s web design services, expertise, and why clients choose him for real estate, Airbnb, and homestay websites. 5+ years of experience in modern web design.',
  keywords: [
    'about sadique',
    'web designer profile',
    'web design services',
    'real estate web designer',
    'Airbnb website designer',
    'professional web design',
    'web design expertise',
    'freelance web designer'
  ],
  openGraph: {
    title: 'About Sadique - Professional Web Designer',
    description: 'Learn about Sadique\'s web design services, expertise, and why clients choose him for real estate, Airbnb, and homestay websites.',
    type: 'profile',
    url: 'https://sadique.co/about',
    images: [
      {
        url: '/Profile-Sadique.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sadique - Professional Web Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sadique - Professional Web Designer',
    description: 'Learn about Sadique\'s web design services, expertise, and why clients choose him for real estate, Airbnb, and homestay websites.',
    images: ['/Profile-Sadique.jpeg'],
  },
  alternates: {
    canonical: 'https://sadique.co/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb 
            items={[
              { label: 'About' }
            ]}
            className="mb-8"
          />
          
          <header className="text-center mb-16">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-6xl mb-6">
              About Sadique
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate web designer with 5+ years of experience, specializing in creating 
              stunning digital experiences for real estate, Airbnb, and homestay properties.
            </p>
          </header>

          <AIContentSection />
        </div>
      </div>
    </div>
  );
}
