'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { sendGAEvent } from '@/lib/analytics';

interface ProjectCardProps {
  project: Project;
  fullWidth?: boolean;
}

export default function ProjectCard({ project, fullWidth = false }: ProjectCardProps) {

  const handleProjectClick = () => {
    sendGAEvent({
      action: 'project_click',
      category: 'Project',
      label: project.title,
    });
  };

  return (
    <Card className={cn(
      "group relative flex flex-col overflow-hidden text-foreground border border-border/35 squircle-lg bg-card",
      fullWidth ? "md:col-span-2" : "md:col-span-1"
    )}>
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0"
        onClick={handleProjectClick}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={'modern architecture'}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </Link>
      <CardContent className="relative z-10 flex flex-col items-start justify-end flex-grow p-8 md:p-12 h-96">
        <h3 className="font-headline text-3xl md:text-4xl font-bold text-card-foreground">{project.title}</h3>
        <p className="mt-2 text-lg text-card-foreground/80 max-w-lg">{project.shortDescription}</p>
        <Button
          variant="default"
          asChild
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleProjectClick}
        >
          <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            View Project
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
