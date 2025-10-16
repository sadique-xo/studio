import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';
import { siteSettings } from '@/lib/placeholder-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="flex items-center space-x-4">
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
          <div className="text-center md:text-right">
             <p className="text-sm text-muted-foreground">
                © {currentYear} {siteSettings.title}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
