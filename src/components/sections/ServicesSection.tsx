import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, PenTool, Search } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'Bespoke Web Design',
    description: 'We create visually stunning, mobile-first websites that reflect the luxury and uniqueness of your property. Our designs are intuitive, engaging, and optimized for conversion.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Custom Development',
    description: 'From seamless booking engine integrations to interactive 3D tours, we build fast, secure, and scalable websites using modern technologies like React and Next.js.',
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'SEO & Content Strategy',
    description: 'We ensure your property gets discovered by the right audience. Our SEO strategies are tailored to the real estate market, driving organic traffic and qualified leads.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a complete suite of services to build and grow your online presence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
