'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto max-w-5xl py-4">
        <div className="flex h-16 items-center justify-between rounded-full border border-border/20 bg-background/30 px-6 backdrop-blur-lg">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="flex flex-1 items-center justify-end md:hidden">
            <MobileNav isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
              <MainNav />
              <nav className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button asChild>
                  <Link href="#faq" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book a 15 min call
                  </Link>
                  </Button>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
