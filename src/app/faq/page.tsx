import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Frequently Asked Questions | Sadique - Web Design Services',
  description: 'Get answers to common questions about web design services, project timelines, pricing, and more. Everything you need to know about working with Sadique.',
  keywords: 'FAQ, frequently asked questions, web design questions, website design help, project timeline, pricing, support',
  openGraph: {
    title: 'Frequently Asked Questions | Sadique - Web Design Services',
    description: 'Get answers to common questions about web design services, project timelines, pricing, and more.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' }
        ]}
      />
      <FAQSection />
    </>
  );
}
