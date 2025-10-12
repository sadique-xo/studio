'use client';
import { projects } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.images.map(url => PlaceHolderImages.find(img => img.imageUrl === url)).filter(Boolean);


  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
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
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-bold text-primary">About the Project</h2>
              <div className="prose prose-lg mt-4 max-w-none text-muted-foreground">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="font-headline text-xl font-bold text-primary">Details</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {projectImages.length > 0 && (
            <div className="mt-16">
              <h2 className="font-headline mb-8 text-center text-3xl font-bold text-primary">Gallery</h2>
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

        </div>
      </div>
    </div>
  );
}
