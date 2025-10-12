'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
];

interface MainNavProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export default function MainNav({ isMobile = false, onLinkClick }: MainNavProps) {
  const pathname = usePathname();

  const navClass = cn(
    'flex gap-6 items-center',
    isMobile && 'flex-col gap-4 text-lg items-start'
  );

  const linkClass = (href: string) => cn(
    'transition-colors hover:text-foreground/80',
    pathname === href ? 'text-foreground' : 'text-foreground/60',
    isMobile && 'text-foreground/80 hover:text-foreground text-xl'
  );

  return (
    <div className={navClass}>
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href} className={linkClass(href)} onClick={onLinkClick}>
          {label}
        </Link>
      ))}
      {isMobile && (
         <Button asChild size="lg" className="mt-4">
            <Link href="/contact" onClick={onLinkClick}>Contact Us</Link>
        </Button>
      )}
    </div>
  );
}
