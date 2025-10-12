import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import { DM_Sans, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontHeadline = DM_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '700'],
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});


export const metadata: Metadata = {
  title: 'sadique.co | Designing serene, conversion-ready websites for real estate, homestays, and Airbnb hosts.',
  description: 'I help property owners build calm, high-converting digital spaces — where every visitor feels at home before they arrive.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-body antialiased", fontHeadline.variable, fontBody.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
