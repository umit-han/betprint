import { Leaf, Phone } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-primary px-4 py-2 text-sm text-primary-foreground">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-center gap-4 sm:justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-4 w-4" />
          <span>Umweltfreundlich</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+4964415643606" className="hover:underline">
            +49 6441 56 43 606
          </a>
        </div>
      </div>
    </div>
  );
}