import { testimonials } from '@/lib/placeholder-data';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function TestimonialsSection() {
  const formattedTestimonials = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    designation: t.role,
    src: t.avatarUrl,
  }));

  return (
    <section id="testimonials" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Trust and results are the cornerstones of our partnerships.
          </p>
        </div>
        <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
      </div>
    </section>
  );
}
