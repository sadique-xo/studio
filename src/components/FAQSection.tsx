'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of websites do you design?",
    answer: "I specialize in designing websites for real estate properties, Airbnb listings, homestays, and vacation rentals. My focus is on creating modern, responsive designs that help property owners showcase their spaces effectively and increase bookings."
  },
  {
    question: "How long does a typical web design project take?",
    answer: "Most web design projects take 2-4 weeks from initial consultation to launch. This includes design, development, content integration, and testing. Complex projects with custom features may take longer."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, I offer ongoing maintenance packages that include regular updates, security patches, content updates, and technical support. This ensures your website stays current and performs optimally."
  },
  {
    question: "What's included in your web design service?",
    answer: "My web design service includes custom design, responsive development, SEO optimization, content integration, basic training, and 30 days of post-launch support. I also provide guidance on content strategy and user experience best practices."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients worldwide. All communication is done in English, and I'm experienced in working across different time zones to accommodate your schedule."
  },
  {
    question: "Can you help improve my existing website?",
    answer: "Yes, I offer website redesign and optimization services. I can analyze your current site, identify areas for improvement, and implement modern design principles to enhance user experience and conversion rates."
  },
  {
    question: "What makes your designs different from templates?",
    answer: "My designs are completely custom-built for your specific needs. Unlike templates, they're optimized for your target audience, include unique branding elements, and are designed to convert visitors into bookings or inquiries."
  },
  {
    question: "Do you handle the technical setup and hosting?",
    answer: "I can guide you through the technical setup process and recommend reliable hosting providers. While I don't provide hosting directly, I ensure your site is properly configured for optimal performance and security."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about my web design services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      "w-5 h-5 text-gray-500 transition-transform",
                      openItems.includes(index) && "rotate-180"
                    )}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
