"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, Eye } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {

  return (
    <section className={cn("relative w-full text-foreground flex flex-col items-center justify-center min-h-[75vh] py-16")}>
      <div className="container px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center space-y-0">
        {/* Animation - Top Center */}
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <DotLottieReact
              src="https://lottie.host/84085961-0527-4e50-b256-af66a2c99d8b/yc8CUZmtca.lottie"
              loop
              autoplay
              style={{ 
                width: '100%', 
                height: 'auto', 
                minHeight: '400px',
                maxHeight: '600px',
                transform: 'scale(1.1)' 
              }}
            />
          </div>
        </div>
        
        {/* Content - Below Animation */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl text-primary leading-tight mt-0">
            Experts in designing & developing Websites, Mobile Apps
          </h1>
          <div className="flex items-center justify-center">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book a 15 min call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
