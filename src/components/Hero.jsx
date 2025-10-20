import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { ArrowRight, } from "lucide-react";

const Hero = () => {
  return (
    <main className='w-full space-y-4 pb-5'>
      {/* Hero Left Side */}
      <div className="flex items-center bg-secondary h-[65 mx-6">
        <div className="space-y-7 p-8 pt-0 text-left md:w-1/2">
         <Link href="/" className="flex items-center gap-8">
              <img src={assets.logo} alt="Bet Print logo" width={80} height={80} />
            </Link>
          <h1 className="text-xl font-medium lg:text-2xl text-center">
          Thermorollen für Wettbüros – zuverlässig, nachhaltig,  
          </h1>
          <p className="!mt-2 text:sm lg:text-lg">
          <span className="block text-xl lg:text-2xl text-center font-bold mb-3">
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
            <Link href="/collection">
              Jetzt einkaufen <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
        <div className="relative hidden h-full w-1/2 md:block">
          <img
            src={assets.banner}
            alt="Bet Print Shop banner"
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
        </div>
      </div>
    </main>
  )
}

export default Hero
