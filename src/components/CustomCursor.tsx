"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (e: MouseEvent) => {
      if (e.target instanceof Element) {
         if (
          e.target.matches(
            'a, button, [role="button"], input[type="submit"], .cursor-pointer'
          )
        ) {
          setIsHovering(true);
        }
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
       if (e.target instanceof Element) {
         if (
          e.target.matches(
            'a, button, [role="button"], input[type="submit"], .cursor-pointer'
          )
        ) {
          setIsHovering(false);
        }
       }
    };
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={cn(
        "hidden md:block fixed w-6 h-6 rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out",
        "bg-foreground/50",
        isHovering ? "scale-150 opacity-75" : ""
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    />
  );
}
