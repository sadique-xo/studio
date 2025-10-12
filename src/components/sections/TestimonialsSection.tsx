import { testimonials } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Trust and results are the cornerstones of our partnerships.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const avatar = PlaceHolderImages.find(img => img.imageUrl === testimonial.avatarUrl);
                return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card className="border-none shadow-none">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          <div className="relative h-20 w-20 mb-4">
                            <Image
                              src={testimonial.avatarUrl}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                              data-ai-hint={avatar?.imageHint || 'person portrait'}
                            />
                          </div>
                          <blockquote className="mt-2 text-lg md:text-xl">
                            "{testimonial.quote}"
                          </blockquote>
                          <p className="mt-4 font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
