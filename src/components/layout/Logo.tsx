import { siteSettings } from "@/lib/placeholder-data";

export default function Logo() {
  return (
    <div className="flex items-center justify-center" aria-label="Sadique.co logo">
      <span className="font-headline text-2xl font-bold text-primary">
        {siteSettings.title}
      </span>
    </div>
  );
}
