import { siteSettings } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={cn("flex items-center justify-center cursor-pointer")} aria-label="Sadique.co logo">
      <Image src="/logo.svg" alt={`${siteSettings.title} logo`} width={120} height={40} />
    </div>
  );
}
