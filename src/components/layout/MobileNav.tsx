'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X,
  Calendar, 
  Home, 
  User, 
  Briefcase, 
  Palette,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { ThemeToggle } from '../ThemeToggle';

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const navLinks = [
  { 
    href: '/#about', 
    label: 'About', 
    icon: User,
    description: 'Learn about my journey',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    href: '/#services', 
    label: 'Services', 
    icon: Briefcase,
    description: 'What I can do for you',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    href: '/#portfolio', 
    label: 'Portfolio', 
    icon: Palette,
    description: 'See my recent work',
    color: 'from-emerald-500 to-teal-500'
  },
];

const quickActions = [
  {
    label: 'Book a Call',
    href: '/contact',
    icon: Calendar,
    variant: 'default' as const,
    description: 'Schedule a 15-min consultation'
  },
  {
    label: 'View Projects',
    href: '/projects',
    icon: ArrowRight,
    variant: 'outline' as const,
    description: 'Explore my work'
  }
];

export default function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle smooth animations
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <Menu className="h-6 w-6 relative z-10" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="w-full sm:w-80 p-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 backdrop-blur-2xl border-r border-border/35 [&>button]:hidden"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-border/35">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="flex items-center space-x-2 group" 
                onClick={handleLinkClick}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Logo />
                </motion.div>
              </Link>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="h-8 w-8 rounded-full bg-muted/50 hover:bg-muted/80 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-6 space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-1"
            >
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                        isActive 
                          ? "bg-primary/10 border border-primary/10" 
                          : "hover:bg-muted/50 border border-transparent hover:border-border/35"
                      )}
                    >
                      {/* Background gradient on hover */}
                      <motion.div
                        className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                          link.color
                        )}
                        whileHover={{ opacity: 0.1 }}
                      />
                      
                      {/* Icon */}
                      <div className={cn(
                        "relative z-10 p-2 rounded-xl transition-all duration-300",
                        isActive 
                          ? "bg-primary/20 text-primary" 
                          : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "font-medium transition-colors duration-300",
                            isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                          )}>
                            {link.label}
                          </span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-primary rounded-full"
                            />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                          {link.description}
                        </p>
                      </div>
                      
                      {/* Arrow */}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-6 border-t border-border/35"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Quick Actions</span>
                </div>
                
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  
                  return (
                    <motion.div
                      key={action.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Link href={action.href} onClick={handleLinkClick}>
                        <Button
                          variant={action.variant}
                          size="lg"
                          className="w-full justify-start gap-3 h-auto p-4 group"
                        >
                          <Icon className="h-4 w-4" />
                          <div className="flex-1 text-left">
                            <div className="font-medium">{action.label}</div>
                            <div className="text-xs opacity-70">{action.description}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="p-6 border-t border-border/35"
          >
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="h-3 w-3 mr-1" />
                Available for new projects
              </Badge>
              <p className="text-xs text-muted-foreground">
                Let's create something amazing together
              </p>
            </div>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
