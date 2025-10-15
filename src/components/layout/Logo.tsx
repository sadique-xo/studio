import { siteSettings } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={cn("flex items-center justify-center cursor-pointer")} aria-label={`${siteSettings.title} logo`}>
      <Image src="/icon.png" alt={`${siteSettings.title} logo`} width={120} height={40} />
    </div>
  );
}
