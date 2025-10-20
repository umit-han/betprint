
import {Leaf, Headphones, Lock, Phone } from "lucide-react";
const items = [
  { icon: <Leaf className="text-primary w-6 h-6" />, text: "Umweltfreundlich hergestellt", }, 
  { icon: <Lock className="text-primary w-6 h-6" />, text: "Sichere Zahlung", }, 
];

export default function TopBanner() {
  return (
    <>
      <div className="w-full bg-white py-4">
        <div className="flex flex-wrap justify-center items-center gap-8"> {items.map((item, i) => ( <div key={i} className="flex items-center gap-3"> {item.icon} <span className="font-bold text-sm lg:text-base">{item.text}</span> </div> ))} </div>
      </div>
      <div className="bg-primary px-4 py-2 text-sm text-primary-foreground">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-center gap-4 sm:justify-between">
        <div className="hidden items-center gap-2 md:flex">
          <Headphones className="h-4 w-4" />
          <span>
          Telefonische Beratung
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+4964415643606" className="hover:underline text-lg">
            +49 6441 56 43 606
          </a>
        </div>
      </div>
    </div>
    </>
  );
}