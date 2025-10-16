"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Why do unlimited revisions have a deadline?",
    answer: "We're happy to offer unlimited revisions as long as they're genuinely helping the project meet expectations. The only reason we set a time limit is to avoid an endless loop of changes that can delay completion. It's just a safeguard, but we're always flexible if revisions are meaningful and move the project forward."
  },
  {
    question: "Do you offer ongoing support and maintenance services?",
    answer: "Yes, we offer support to keep your website up-to-date. Our team is available for updates, troubleshooting, and enhancements as needed."
  },
  {
    question: "How do I get started?",
    answer: "Book a discovery call with us to discuss your project requirements, we'll guide you through the next steps on the call."
  },
  {
    question: "What happens if I'm not satisfied with the final result?",
    answer: "Your satisfaction is important to us. We'll work closely with you to address any concerns and make revisions until you're happy with the outcome."
  },
  {
    question: "Are there any additional costs I should be aware of?",
    answer: "We believe in transparency when it comes to pricing. Our quotes are comprehensive and include all essential services needed to create your website. However, if there are any additional features or services you request beyond the scope of our initial agreement, we'll provide a clear explanation of any associated costs upfront to avoid surprises."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Everything you need to know about our services and process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-primary-foreground/20 rounded-lg bg-primary-foreground/5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-foreground/10 transition-colors"
                >
                  <span className="font-medium text-primary-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-primary-foreground/70 transition-transform duration-200 flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-4 text-primary-foreground/80">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
