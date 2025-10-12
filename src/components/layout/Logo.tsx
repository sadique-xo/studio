import { siteSettings } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";

export default function Logo() {
  return (
    <div className={cn("flex items-center justify-center cursor-pointer")} aria-label="Sadique.co logo">
      <span className="font-headline text-2xl font-bold text-primary">
        {siteSettings.title}
      </span>
    </div>
  );
}
