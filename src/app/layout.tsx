import type { Metadata, Viewport } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/navbar';

import BookingCtaSection from '@/components/sections/BookingCtaSection';
import './globals.css';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const fontHeadline = localFont({
  src: '../../public/fonts/ClashDisplay-Semibold.ttf',
  variable: '--font-headline',
  weight: '600',
});

const fontBody = localFont({
  src: '../../public/fonts/CabinetGrotesk-Medium.ttf',
  variable: '--font-body',
  weight: '500',
});


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sadique.co'),
  title: 'Sadique | Modern Web Designer - From wireframes to real things people use',
  description: 'A modern web designer with 5+ years experience, passionate about creating visually stunning and user-friendly designs that captivate and inspire. Specializing in real estate, homestays, and Airbnb websites.',
  keywords: ['web designer', 'UI/UX designer', 'real estate websites', 'Airbnb websites', 'homestay websites', 'modern web design', 'freelance designer'],
  authors: [{ name: 'Sadique' }],
  creator: 'Sadique',
  publisher: 'Sadique',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sadique.co',
    siteName: 'Sadique - Modern Web Designer',
    title: 'Sadique | Modern Web Designer - From wireframes to real things people use',
    description: 'A modern web designer with 5+ years experience, passionate about creating visually stunning and user-friendly designs that captivate and inspire.',
    images: [
      {
        url: '/Profile-Sadique.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sadique - Modern Web Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@notsadique',
    creator: '@notsadique',
    title: 'Sadique | Modern Web Designer - From wireframes to real things people use',
    description: 'A modern web designer with 5+ years experience, passionate about creating visually stunning and user-friendly designs that captivate and inspire.',
    images: ['/Profile-Sadique.jpeg'],
  },
  icons: {
    icon: '/Profile.PNG?v=1',
    shortcut: '/Profile.PNG?v=1',
    apple: '/Profile.PNG?v=1',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/Profile.PNG?v=1',
      },
    ],
  },
  alternates: {
    canonical: 'https://sadique.co',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sadique",
    "jobTitle": "Web Designer",
    "description": "A modern web designer with 5+ years experience, passionate about creating visually stunning and user-friendly designs that captivate and inspire.",
    "url": "https://sadique.co",
    "image": "https://sadique.co/Profile-Sadique.jpeg",
    "sameAs": [
      "https://github.com/sadique-xo",
      "https://www.linkedin.com/in/sadiqueh/",
      "https://x.com/notsadique",
      "https://dribbble.com/designbysadique"
    ],
    "knowsAbout": [
      "Web Design",
      "UI/UX Design",
      "Real Estate Websites",
      "Airbnb Websites",
      "Homestay Websites",
      "Modern Web Design",
      "Responsive Design",
      "User Experience",
      "Brand Identity",
      "Digital Marketing"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Web Designer",
      "occupationLocation": {
        "@type": "Country",
        "name": "India"
      },
      "skills": [
        "Web Design",
        "UI/UX Design",
        "Real Estate Websites",
        "Airbnb Websites",
        "Responsive Design",
        "Brand Identity"
      ]
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Design Services",
        "description": "Professional web design services for real estate, Airbnb, and homestay properties",
        "provider": {
          "@type": "Person",
          "name": "Sadique"
        }
      },
      "priceRange": "Contact for pricing",
      "availability": "https://schema.org/InStock"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Self-taught Designer"
    },
    "award": [
      "5+ years of experience in web design",
      "Specialized in real estate and hospitality websites"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sadique - Modern Web Designer",
              "url": "https://sadique.co",
              "description": "Professional web design services for real estate, Airbnb, and homestay properties. Modern, responsive designs that convert visitors into bookings.",
              "author": {
                "@type": "Person",
                "name": "Sadique"
              },
              "publisher": {
                "@type": "Person",
                "name": "Sadique"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sadique.co/projects?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "Organization",
                "name": "Sadique Web Design",
                "url": "https://sadique.co",
                "logo": "https://sadique.co/Profile.PNG",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXXXXXXXXX",
                  "contactType": "customer service",
                  "email": "sadique.design@icloud.com"
                },
                "sameAs": [
                  "https://github.com/sadique-xo",
                  "https://www.linkedin.com/in/sadiqueh/",
                  "https://x.com/notsadique",
                  "https://dribbble.com/designbysadique"
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Design Services",
              "description": "Professional web design services specializing in real estate, Airbnb, and homestay websites. Modern, responsive designs that drive bookings and conversions.",
              "provider": {
                "@type": "Person",
                "name": "Sadique"
              },
              "areaServed": "Worldwide",
              "serviceType": "Web Design",
              "category": "Design Services",
              "offers": {
                "@type": "Offer",
                "description": "Custom web design solutions for property owners and hospitality businesses",
                "priceRange": "Contact for pricing",
                "availability": "https://schema.org/InStock"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real Estate Website Design",
                      "description": "Custom websites for real estate properties and agents"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Airbnb Website Design",
                      "description": "Professional websites for Airbnb hosts and property managers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Homestay Website Design",
                      "description": "Custom websites for homestay and vacation rental properties"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={cn("font-body antialiased min-h-screen bg-background relative", fontHeadline.variable, fontBody.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <PerformanceOptimizer />
            {/* FlickeringGrid at top only - 100px with fade */}
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.3}
              />
              {/* Fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <div className="relative z-10">
              <main className="flex-grow pb-24">
                {children}
              </main>
              <BookingCtaSection />

            </div>
            <Navbar />
            <WhatsAppWidget />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
