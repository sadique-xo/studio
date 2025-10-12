"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [targetProps, setTargetProps] = useState({
    width: 24,
    height: 24,
    borderRadius: '50%',
    x: -100,
    y: -100,
  });

  useEffect(() => {
    setIsClient(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      
      if (interactiveElement) {
        const rect = interactiveElement.getBoundingClientRect();
        const styles = window.getComputedStyle(interactiveElement);
        setTargetProps({
          width: rect.width,
          height: rect.height,
          borderRadius: styles.borderRadius,
          x: rect.left,
          y: rect.top,
        });
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       const interactiveElement = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      if (interactiveElement) {
        setIsHovering(false);
      }
    };
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isClient) {
    return null;
  }
  
  const cursorSize = isHovering ? targetProps.width : 24;
  const cursorHeight = isHovering ? targetProps.height : 24;
  const cursorX = isHovering ? targetProps.x : position.x - cursorSize / 2;
  const cursorY = isHovering ? targetProps.y : position.y - cursorHeight / 2;


  return (
    <div
      className={cn(
        "hidden md:block fixed rounded-full pointer-events-none z-[9999]",
        "bg-foreground/50 transition-[width,height,border-radius,transform,opacity] duration-200 ease-out",
        isHovering ? "opacity-75" : ""
      )}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorHeight}px`,
        borderRadius: isHovering ? targetProps.borderRadius : '50%',
        transform: `translate(${cursorX}px, ${cursorY}px)`,
      }}
    />
  );
}
