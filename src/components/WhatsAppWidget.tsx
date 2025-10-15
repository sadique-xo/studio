"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send } from "lucide-react";
import { siteSettings } from "@/lib/placeholder-data";
import Image from "next/image";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const phoneNumber = "1234567890"; // IMPORTANT: Replace with your WhatsApp number

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (message) {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-transparent hover:bg-transparent text-white shadow-lg transform hover:scale-110 transition-transform duration-200 p-0 overflow-hidden"
          onClick={toggleOpen}
        >
          {isOpen ? <X className="w-8 h-8 text-primary" /> : (
            <Image 
              src="https://img.freepik.com/premium-vector/whatsapp-app-round-icon-popular-messenger-social-media-logo_277909-873.jpg?semt=ais_hybrid&w=740&q=80"
              alt="WhatsApp Icon"
              width={64}
              height={64}
              className="rounded-full"
            />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-80 shadow-2xl rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <Image src="/Profile.PNG" alt={siteSettings.title} width={40} height={40} className="rounded-full border-2 border-primary-foreground/50" />
                    <div>
                        <CardTitle className="text-base font-bold">{siteSettings.title}</CardTitle>
                        <p className="text-xs text-primary-foreground/80">Typically replies within an hour</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4 bg-card h-80 overflow-y-auto">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-xl rounded-bl-none max-w-xs self-start shadow">
                    <p className="text-sm">Hi there! 👋<br />How can I help you today?</p>
                </div>
            </CardContent>
            <CardFooter className="p-2 border-t bg-background/50 rounded-b-xl">
                <div className="flex w-full items-center gap-2">
                    <Input 
                        placeholder="Type a message..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        className="bg-background rounded-full"
                    />
                    <Button size="icon" onClick={handleSend} disabled={!message} className="bg-[#25D366] hover:bg-[#128C7E] rounded-full w-10 h-10 shrink-0">
                        <Send className="w-5 h-5 text-white" />
                    </Button>
                </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
