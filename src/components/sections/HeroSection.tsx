import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HeroSection() {

  return (
    <section className="relative w-full text-foreground h-[400px] flex items-center justify-center">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl text-primary">
            Where your property finds its digital home.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            I help real-estate owners, Airbnb hosts, and rental managers design clean, credible websites that attract bookings — without the stress.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#portfolio">See Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
