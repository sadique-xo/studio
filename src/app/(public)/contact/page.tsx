import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteSettings } from "@/lib/placeholder-data";

export const metadata = {
  title: "Contact | Sadique.co",
  description: "Get in touch with Sadique.co to discuss your next project.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="font-headline text-2xl font-semibold">Get in Touch</h2>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="space-y-4 text-foreground">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-accent" />
                        <a href={`mailto:${siteSettings.contactEmail}`} className="hover:text-accent">{siteSettings.contactEmail}</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-accent" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span>New York, USA (Remote First)</span>
                    </div>
                </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
