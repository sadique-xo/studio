import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';
import { siteSettings } from '@/lib/placeholder-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="flex flex-col space-y-2">
            <nav className="flex justify-center gap-4">
                <Link href="/airbnb-designer" className="text-sm text-muted-foreground hover:text-foreground">
                    Airbnb Designer
                </Link>
            </nav>
             <p className="text-sm text-muted-foreground">
                © {currentYear} {siteSettings.title}. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            {siteSettings.socialLinks.twitter && (
              <Link href={siteSettings.socialLinks.twitter} passHref>
                <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            )}
            {siteSettings.socialLinks.linkedin && (
              <Link href={siteSettings.socialLinks.linkedin} passHref>
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            )}
            {siteSettings.socialLinks.github && (
                <Link href={siteSettings.socialLinks.github} passHref>
                    <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
                </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
