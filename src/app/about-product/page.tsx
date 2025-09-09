import Image from "next/image";
import thermalRolle from "@/assets/thermal-rolle.jpg";

export default function AboutProductPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-12 px-5 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Über unser Produkt</h1>
        <p className="mt-2 text-muted-foreground">
          Entdecken Sie die Qualität und Innovation, die in jedem Detail steckt.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <Image
            src={thermalRolle}
            alt="Produktbild"
            width={600}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Höchste Druckqualität</h2>
          <p className="text-muted-foreground">
            Unsere Drucktechnologie der neuesten Generation garantiert gestochen
            scharfe Bilder und lebendige Farben. Wir verwenden nur hochwertige
            Materialien, um sicherzustellen, dass Ihr Endprodukt nicht nur gut
            aussieht, sondern auch langlebig ist. Perfekt für professionelle
            Präsentationen, Marketingmaterialien oder persönliche Projekte.
          </p>
        </div>
      </div>

      <div className="space-y-8 rounded-lg bg-secondary/50 p-8">
        <h2 className="text-center text-2xl font-bold">Warum Bet Print wählen?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="font-semibold">Innovation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Wir investieren kontinuierlich in die neueste Technologie, um
              Ihnen die besten Ergebnisse zu liefern.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Zuverlässigkeit</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pünktliche Lieferung und konsistente Qualität, auf die Sie sich
              bei jedem Auftrag verlassen können.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Kundenservice</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Unser engagiertes Team steht Ihnen bei jedem Schritt zur Seite,
              von der Konzeption bis zur Fertigstellung.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

