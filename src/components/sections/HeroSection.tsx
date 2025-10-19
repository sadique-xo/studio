"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, Eye } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {

  return (
    <section className={cn("relative w-full text-foreground flex flex-col items-center justify-center min-h-[75vh] py-8 md:py-12")}>
      <div className="container px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center">
        {/* Animation - Top Center */}
        <div className="relative z-10 flex items-center justify-center w-full mb-4 md:mb-6">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <div className="scale-[1.8] md:scale-[1.2]">
              <DotLottieReact
                src="https://lottie.host/84085961-0527-4e50-b256-af66a2c99d8b/yc8CUZmtca.lottie"
                loop
                autoplay
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  minHeight: '250px',
                  maxHeight: '400px'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Content - Below Animation */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl text-primary leading-tight mt-0">
            Expert in designing & developing <span className="underline underline-offset-4 decoration-2">websites</span>, <span className="underline underline-offset-4 decoration-2">mobile apps</span>
          </h1>
          <div className="flex items-center justify-center">
            <Button asChild size="lg">
              <Link href="#booking-cta" className="flex items-center gap-2">
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
