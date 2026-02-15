"use client";

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import IdeaForm from '@/components/ui/idea-form';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AuditBanner from '@/components/AuditBanner';

export default function Home() {
  return (
    <>
      <AuditBanner />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <section className="py-20 overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Lottie Animation on the Left */}
            <div className="w-full max-w-2xl mx-auto md:mx-0">
              <DotLottieReact
                src="https://lottie.host/84085961-0527-4e50-b256-af66a2c99d8b/yc8CUZmtca.lottie"
                loop
                autoplay
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>

            {/* Content and Form on the Right */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Have an idea?
              </h2>
              <p className="text-muted-foreground max-w-[600px] mb-8">
                We'd love to hear your thoughts or suggestions on how we can improve.
              </p>
              <IdeaForm
                backgroundColor="bg-primary"
                textColor="text-primary-foreground"
                buttonText="Share your idea"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
