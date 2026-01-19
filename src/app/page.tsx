import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import IdeaForm from '@/components/ui/idea-form';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <section className="py-20 flex flex-col items-center justify-center">
        <div className="container px-4 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Have an idea?
          </h2>
          <p className="text-muted-foreground text-center max-w-[600px] mb-4">
            We'd love to hear your thoughts or suggestions on how we can improve.
          </p>
          <IdeaForm
            backgroundColor="bg-primary"
            textColor="text-primary-foreground"
            buttonText="Share your idea"
          />
        </div>
      </section>
    </>
  );
}
