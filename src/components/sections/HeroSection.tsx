import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {

  return (
    <section className="relative h-screen w-full bg-primary text-primary-foreground">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Where your property finds its digital home.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            I help real-estate owners, Airbnb hosts, and rental managers design clean, credible websites that attract bookings — without the stress.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/#portfolio">See Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
