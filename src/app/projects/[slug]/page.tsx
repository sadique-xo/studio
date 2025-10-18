'use client';

import { projects, testimonials } from '@/lib/placeholder-data';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MapPin, Quote } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.images.map(url => ({ imageUrl: url, imageHint: 'project image' }));
  const testimonial = testimonials.find(t => t.id === project.id); // Assuming testimonial ID matches project ID


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Breadcrumb 
              items={[
                { label: 'Projects', href: '/#portfolio' },
                { label: project.title }
              ]}
              className="mb-4"
            />
            <Button variant="ghost" asChild>
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <header className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-6xl">
              {project.title}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{project.location}</span>
            </div>
          </header>

          <div className="mb-12">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full md:h-[550px]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               <div className="md:col-span-1">
                  <h3 className="font-headline text-2xl font-bold text-primary">About</h3>
               </div>
               <div className="md:col-span-2">
                 <p className="text-lg text-muted-foreground">{project.description}</p>
                 <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               <div className="md:col-span-1">
                  <h3 className="font-headline text-2xl font-bold text-primary">The Challenge</h3>
               </div>
               <div className="md:col-span-2">
                 <p className="text-lg text-muted-foreground">{project.challenge}</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               <div className="md:col-span-1">
                  <h3 className="font-headline text-2xl font-bold text-primary">The Solution</h3>
               </div>
               <div className="md:col-span-2">
                 <p className="text-lg text-muted-foreground">{project.solution}</p>
               </div>
            </div>
          
            {projectImages.length > 0 && (
              <div className="mt-8">
                <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Project Gallery</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {projectImages.map((image, index) => (
                    image && (
                      <div key={index} className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={image.imageUrl}
                          alt={`${project.title} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {testimonial && (
              <div className="mt-8 bg-card rounded-lg p-8 md:p-12 shadow-sm">
                <div className="max-w-2xl mx-auto text-center">
                  <Quote className="w-12 h-12 text-accent mx-auto mb-4" />
                  <blockquote className="text-xl md:text-2xl font-medium text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6 flex items-center justify-center gap-4">
                     <Image src={testimonial.avatarUrl} alt={testimonial.name} width={50} height={50} className="rounded-full" />
                     <div>
                       <p className="font-bold text-foreground">{testimonial.name}</p>
                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                     </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
