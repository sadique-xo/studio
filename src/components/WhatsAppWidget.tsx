"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { X, MessageCircle, Phone, Mail } from "lucide-react";
import { siteSettings } from "@/lib/placeholder-data";
import Image from "next/image";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919334831895"; // WhatsApp number

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div className="relative">
          <Button
            size="icon"
            className="relative rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transform hover:scale-110 transition-all duration-300 p-0 border-2 border-border"
            onClick={toggleOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
          <Card className="w-72 sm:w-80 shadow-2xl rounded-2xl border border-border/50 bg-card/95 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <CardHeader className="flex flex-row items-center justify-between bg-primary p-4 rounded-t-2xl text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image 
                    src="/Profile.PNG" 
                    alt={siteSettings.title} 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-border/30" 
                  />
                </div>
                <div>
                  <CardTitle className="text-base font-bold text-primary-foreground">Sadique</CardTitle>
                  <div className="text-xs text-primary-foreground/80 flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-pulse"></div>
                    Online now
                  </div>
                </div>
              </div>
            </CardHeader>

            {/* Chat Content */}
            <CardContent className="p-3 sm:p-4 bg-card h-64 sm:h-80 flex flex-col">
              {/* Welcome Message */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-muted text-muted-foreground px-4 py-3 rounded-3xl rounded-bl-sm max-w-[85%] shadow-sm">
                  <p className="text-sm leading-relaxed">Hi there! 👋</p>
                  <p className="text-sm mt-1 leading-relaxed">I'm here to help you with your property needs. What can I do for you today?</p>
                </div>
              </div>

              {/* Spacer to push buttons to bottom */}
              <div className="flex-1"></div>

              {/* Quick Actions - Bottom and Centered */}
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs h-8 rounded-full flex-1 sm:flex-none border-primary/20"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'd like to connect over a call to discuss my project.")}`;
                    window.open(whatsappUrl, "_blank");
                    setIsOpen(false);
                  }}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Call me
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs h-8 rounded-full flex-1 sm:flex-none border-primary/20"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to know more about your services.")}`;
                    window.open(whatsappUrl, "_blank");
                    setIsOpen(false);
                  }}
                >
                  <Mail className="w-3 h-3 mr-1" />
                  I want to know more
                </Button>
              </div>
            </CardContent>

          </Card>
        </div>
      )}
    </>
  );
}

