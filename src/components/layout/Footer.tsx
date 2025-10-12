import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';
import { siteSettings } from '@/lib/placeholder-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="flex items-center">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteSettings.title}. All Rights Reserved.
          </p>
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
      </div>
    </footer>
  );
}
