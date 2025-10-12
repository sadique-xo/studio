import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const projectImage = PlaceHolderImages.find(img => img.imageUrl === project.coverImage);

  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={projectImage?.imageHint || 'modern architecture'}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
          <p className="text-muted-foreground">{project.shortDescription}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="mr-1 text-sm">View</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
