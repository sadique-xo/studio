import { projects } from '@/lib/placeholder-data';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Trusted by boutique stays, real-estate agents, and modern rental hosts.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into our passion for creating exceptional digital experiences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} fullWidth={index === 0} />
          ))}
        </div>
    </section>
  );
}
