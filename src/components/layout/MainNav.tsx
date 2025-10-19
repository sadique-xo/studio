'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: 'https://tale.sadique.co', label: 'Blog' },
];

interface MainNavProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export default function MainNav({ isMobile = false, onLinkClick }: MainNavProps) {
  const pathname = usePathname();

  const navClass = cn(
    'flex gap-2 items-center',
    isMobile && 'flex-col gap-4 text-lg items-start'
  );

  const linkClass = (href: string) => cn(
    'transition-colors hover:text-primary px-4 py-2 rounded-full',
    pathname === href ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'text-primary/70',
    isMobile && 'text-foreground/80 hover:text-foreground text-xl px-0'
  );

  return (
    <div className={navClass}>
      {navLinks.map(({ href, label }) => (
        <Link 
          key={href} 
          href={href} 
          className={linkClass(href)} 
          onClick={onLinkClick}
          {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {label}
        </Link>
      ))}
      {isMobile && (
         <Button asChild size="lg" className="mt-4">
            <Link href="#booking-cta" onClick={onLinkClick} className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book a 15 min call
            </Link>
        </Button>
      )}
    </div>
  );
}
