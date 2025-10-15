import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, PenTool, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'Bespoke Web Design',
    description: 'Visually stunning, mobile-first websites that reflect the luxury and uniqueness of your property.',
    className: 'md:col-span-2',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Custom Development',
    description: 'Seamless booking integrations and interactive tours using modern technologies like React and Next.js.',
    className: 'md:col-span-1',
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'SEO & Content Strategy',
    description: 'Tailored SEO to get your property discovered, driving organic traffic and qualified leads.',
    className: 'md:col-span-3',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete suite of services to build and grow your online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={cn("flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300", service.className)}>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 shrink-0">
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
