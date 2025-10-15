"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send } from "lucide-react";
import { siteSettings } from "@/lib/placeholder-data";
import Image from "next/image";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-8 h-8"
      fill="currentColor"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c101.2 0 183.3 82.1 183.3 183.3 0 32.7-8.6 64.3-24.8 92.2l-17.7 31.8-10.9 6.3-81.5 47.3-83.5-48.9-10.9-6.3-17.7-31.8c-16.2-27.9-24.8-59.5-24.8-92.2 0-101.2 82.1-183.3 183.3-183.3zm-49.8 288.7c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm30 0c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm30 0c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15z" />
      <path d="M223.9 32C101.5 32 1.9 131.6 1.9 254s99.6 222 222 222c37.2 0 73.7-9.3 106.1-27L448 480 417.1 362.3c19.4-33.7 29.6-72.1 29.6-111 0-122.4-99.6-222-222-222zm157 325.2c-16.2 27.9-47.8 43.5-79.9 43.5h-.1c-32.1 0-63.7-15.6-79.9-43.5l-17.7-31.8-10.9-6.3-81.5 47.3-83.5-48.9-10.9-6.3-17.7-31.8c-16.2-27.9-24.8-59.5-24.8-92.2 0-101.2 82.1-183.3 183.3-183.3 101.2 0 183.3 82.1 183.3 183.3 0 32.7-8.6 64.3-24.8 92.2l-17.7 31.8-10.9 6.3 81.5 47.3 83.5-48.9 10.9-6.3 17.7 31.8c16.2 27.9 24.8 59.5 24.8 92.2 0 101.2-82.1 183.3-183.3-183.3-37.2 0-73.7-9.3-106.1-27L1.9 445.1c-19.4-33.7-29.6-72.1-29.6-111C-27.7 131.6 71.9 32 194.3 32c59.3 0 115 23.1 157 65.1 42 42 65.1 97.7 65.1 157 0 59.3-23.1 115-65.1 157z" />
      <path d="M128.5 152.1c-2.8-6.2-5.5-6.3-8.3-6.4-2.5-.1-5.3 0-8.1 0-2.8 0-7.3.9-11.1 4.4-3.8 3.5-14.5 14.2-14.5 34.6s14.8 40.1 16.9 42.9c2.1 2.8 29.2 44.7 71.1 62.6 35.1 14.9 41.9 11.9 49.3 11.1 7.4-.8 23.4-9.6 26.7-18.9 3.3-9.3 3.3-17.3 2.3-18.9-1-1.6-3.8-2.6-8.1-4.4-4.2-1.8-25-12.3-28.9-13.7-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-11.1 13.7-13.6 16.5-2.5 2.8-5 3.1-9.2 1.3s-17.6-6.5-33.5-20.7c-12.4-11.1-20.7-24.8-23.1-28.9-2.4-4.2-.3-6.5 1.9-8.6 2-1.9 4.2-3.1 6.2-4.4 2.1-1.2 2.8-2.1 4.2-3.5 1.4-1.4.7-2.8-.3-4.9-1-2.1-9.5-22.9-13-31.3z" />
    </svg>
  );

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
          className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transform hover:scale-110 transition-transform duration-200"
          onClick={toggleOpen}
        >
          {isOpen ? <X className="w-8 h-8" /> : <WhatsAppIcon />}
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
