import { projects } from '@/lib/placeholder-data';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into our passion for creating exceptional digital experiences.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
