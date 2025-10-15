import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const fontHeadline = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '500', '700', '800'],
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});


export const metadata: Metadata = {
  title: 'sadique.co | Designing serene, conversion-ready websites for real estate, homestays, and Airbnb hosts.',
  description: 'I help property owners build calm, high-converting digital spaces — where every visitor feels at home before they arrive.',
  icons: {
    icon: '/Profile.PNG?v=1',
    shortcut: '/Profile.PNG?v=1',
    apple: '/Profile.PNG?v=1',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/Profile.PNG?v=1',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-body antialiased dotted-background", fontHeadline.variable, fontBody.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
