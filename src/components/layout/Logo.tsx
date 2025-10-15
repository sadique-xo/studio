import { siteSettings } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={cn("flex items-center gap-2 cursor-pointer rounded-full p-1")} aria-label={`${siteSettings.title} logo`}>
      <Image src="/Profile.PNG" alt={`${siteSettings.title} logo`} width={40} height={40} className="rounded-full" />
      <span className="font-bold text-lg text-primary pr-2">{siteSettings.title}</span>
    </div>
  );
}
