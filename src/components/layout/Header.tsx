'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';
import MainNav from './MainNav';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-end md:hidden">
           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mb-8 flex items-center" onClick={() => setIsMenuOpen(false)}>
                 <Logo />
              </Link>
              <div className="flex flex-col space-y-4">
                <MainNav isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex">
          <MainNav />
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
