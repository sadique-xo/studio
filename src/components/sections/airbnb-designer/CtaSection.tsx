import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact-cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Let’s make your property unforgettable online.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Ready to create a digital experience as unique and luxurious as your property?
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Start Project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
