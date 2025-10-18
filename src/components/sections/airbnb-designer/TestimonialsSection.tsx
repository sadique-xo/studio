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
                return (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                          <div className="relative h-24 w-24 mb-6">
                            <Image
                              src={testimonial.avatarUrl}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <blockquote className="mt-2 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
                            "{testimonial.quote}"
                          </blockquote>
                          <p className="mt-6 font-bold text-lg">{testimonial.name}</p>
                          <p className="text-md text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
