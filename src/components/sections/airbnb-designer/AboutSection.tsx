import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Design That Sells Experiences
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Sadique.co, we believe a website is more than just a digital brochure; it's the virtual front door to a premium experience. We are a niche design studio specializing in crafting bespoke web solutions for the luxury real estate and high-end Airbnb market.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our passion is translating the unique character and luxury of a physical property into a captivating digital journey. We combine elegant design with cutting-edge technology to create websites that not only look stunning but also drive bookings and inquiries.
            </p>
          </div>
          <div className="order-1 md:order-2">
            {aboutImage && (
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
