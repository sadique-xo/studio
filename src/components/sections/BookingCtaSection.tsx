import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function BookingCtaSection() {
  return (
    <section id="booking-cta" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline font-bold leading-none tracking-tight text-5xl md:text-[clamp(3rem,8vw,9rem)]">
          <span>Book a </span>
          <span className="text-primary underline underline-offset-4 decoration-2">15–min call</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Please select the time that fits you or just
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground md:text-xl">
          <Mail className="h-5 w-5" />
          <span>Email us at</span>
          <Link
            href="mailto:hello@sadique.co"
            className="text-primary underline underline-offset-4 decoration-2"
          >
            hello@sadique.co
          </Link>
        </div>
      </div>
    </section>
  );
}
