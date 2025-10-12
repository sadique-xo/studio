import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { siteSettings } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[calc(100vh-56px)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            {siteSettings.tagline}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80 md:text-xl">
            We build stunning, high-performance websites for luxury real estate and premium Airbnb properties that captivate and convert.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
