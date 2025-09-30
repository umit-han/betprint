import type { Metadata } from "next";
import banner from "@/assets/banner.jpeg";
import rolleInfo from "@/assets/rolle-info.png";
import tRolle1 from "@/assets/t-rolle-1.png";
import tRolle2 from "@/assets/t-rolle-2.jpg";
import tRolle3 from "@/assets/t-rolle-3.jpg";
import tRolle4 from "@/assets/t-rolle-4.png";
import tRolle5 from "@/assets/t-rolle-5.png";

import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { ArrowRight,Leaf, Headphones, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Thermorollen Online Kaufen",
  description: "Ihr Spezialist für Wettkassenzettel. Wir liefern hochwertige Thermorollen, perfekt für die Anforderungen von Wettbüros. Top-Qualität & schnelle Lieferung garantiert.",
  keywords: ["Thermorollen", "Wettbürobedarf", "Bonrollen", "Kassenzettel", "Thermopapier", "Bondruckerrollen", "Hochwertige Thermorollen", "Schnelle Lieferung", "Betprint"],
  alternates: {
    canonical: "https://www.betprint.de",
  },
};

const items = [ { icon: <Leaf className="text-primary w-8 h-8" />, text: "Umweltfreundlich hergestellt", }, 
  { icon: <Headphones className="text-primary w-8 h-8" />, text: "Telefonische Beratung", }, 
  { icon: <Lock className="text-primary w-8 h-8" />, text: "Sichere Zahlung", }, ];

export default function Home() {
  return (
    <main className="w-full space-y-4 pb-5">
      <div className="flex items-center bg-secondary h-[65vh] mx-6">
        <div className="space-y-7 p-8 text-left md:w-1/2">
          <h1 className="text-2xl font-medium md:text-2xl text-center">
          Thermorollen für Wettbüros – zuverlässig, nachhaltig,  
          </h1>
          <p className="!mt-2 text-lg">
          <span className="block text-2xl md:text-2xl text-center font-bold mb-3">
            Made in Germany
          </span>
          Als spezialisierter Partner für Wettbüros in Deutschland liefern wir Thermorollen, die
          präzise auf die Bondrucker und Terminals aller lizenzierten Wettanbieter abgestimmt sind.
          Ob Quittungen, Wettscheine oder Belege – unsere Produkte stehen für Zuverlässigkeit,
          Langlebigkeit und ein hohes Maß an Umweltbewusstsein.
          Unsere Thermorollen werden ausschließlich in Deutschland produziert – nach strengen
          Umwelt- und Qualitätsstandards. Sie sind frei von Bisphenolen (BPA, BPS, BPF) sowie
          phenolhaltigen Farbentwicklern und bieten damit eine sichere und nachhaltige Lösung für
          den täglichen Betrieb.
          Ihr Vorteil: Thermorollen, die exakt auf die Bedürfnisse von Wettshops zugeschnitten sind –
          nachhaltig, sicher und sofort einsatzbereit.
          </p>
          <Button asChild>
            <Link href="/shop">
              Jetzt einkaufen <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
        <div className="relative hidden h-full w-1/2 md:block">
          <Image
            src={banner}
            alt="Bet Print Shop banner"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
        </div>
      </div>
      <div className="flex justify-around items-center gap-8 py-8"> {items.map((item, i) => ( <div key={i} className="flex items-center gap-3"> {item.icon} <span className="font-bold text-xl">{item.text}</span> </div> ))} </div>
      <div className="mx-auto max-w-8xl ">
      <Suspense fallback={<LoadingSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      </div>
    </main>
  );
}

async function FeaturedProducts() {
  const wixClient = getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="flex grid-cols-2 flex-col gap-8 sm:grid md:grid-cols-3 lg:grid-cols-4 mt-8">
        {/* {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}

        <div className="relative overflow-hidden flex justify-center items-center">
          <Image
            src={tRolle4}
            alt="Thermorolle 1"
            width={300}
            height={300}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <Image
            src={rolleInfo}
            alt="Info zu unseren Thermorollen"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <Image
            src={tRolle2}
            alt="Thermorolle"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden flex justify-center items-center">
          <Image
            src={tRolle5}
            alt="Thermorolle"
            width={700}
            height={700}
            className="max-w-[300px] max-h-[300px] h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}