"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <section className={cn("relative w-full text-foreground flex flex-col items-center justify-center min-h-screen py-12 md:py-24 overflow-hidden bg-background antialiased transition-colors duration-500")}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-60",
          "[background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)]",
        )}
      />

      {/* Fade effect for the grid at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="var(--spotlight-color)"
      />

      {/* Decorative Gradient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center justify-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Badge-like subtle text */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase shadow-sm"
          >
            Creative Design & Development
          </motion.span>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.1] tracking-tight">
            Crafting digital <br />
            <span className="text-foreground italic">excellence</span> for the next gen.
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Expert in designing & developing high-end <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">websites</span> and <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">mobile apps</span> that drive growth.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="xl" className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
              <Link href="#booking-cta" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book a 15 min call
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="h-14 px-8 text-lg font-semibold rounded-full hover:bg-muted/50 transition-all active:scale-95">
              <Link href="/portfolio">
                View Profile
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
