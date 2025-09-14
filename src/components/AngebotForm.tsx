"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function AngebotPage() {
  const [rueckseitendruck, setRueckseitendruck] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <h1 className="text-2xl font-bold tracking-tight text-center md:text-4xl">Anfrageformular</h1>
        {/* <div className="space-y-6">
          <h2 className="text-lg font-bold tracking-tight md:text-2xl">
            ✨ Ihr individuelles Angebot – schnell & unkompliziert
          </h2>
          <p className="text-lg text-muted-foreground">
            Viele Geschäftskunden nutzen bereits unseren exklusiven Service für
            Großabnehmer. Ob Sondermaße, Palettenlieferung oder personalisierte
            Rollen – wir bieten Ihnen die perfekte Lösung.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold">
                📦 Große Mengen zum besten Preis
              </h2>
              <p className="mt-2 text-muted-foreground">
                Benötigen Sie größere Stückzahlen an Thermo-, Kassen- oder
                EC-Rollen? Wir erstellen Ihnen gerne ein individuelles Angebot
                zu attraktiven Palettenkonditionen – zuverlässig geliefert per
                Spedition.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                📏 Sonderformate nach Wunsch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Sie benötigen Rollen in speziellen Abmessungen, die nicht in
                unserem Standardsortiment enthalten sind? Kein Problem! Wir
                fertigen exakt nach Ihren Vorgaben – inklusive Papierqualität
                und gewünschter Abnahmemenge.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                🖨️ Individueller Rückseitendruck
              </h2>
              <p className="mt-2 text-muted-foreground">
                Nutzen Sie Ihre Bonrollen als Werbefläche: Ob Logo, Hinweistext
                oder Werbebotschaft – wir bedrucken die Rückseite nach Ihren
                Vorstellungen. So wird jeder Kassenzettel zu einem
                wirkungsvollen Marketinginstrument.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                🏬 Direkte Belieferung von Filialen
              </h2>
              <p className="mt-2 text-muted-foreground">
                Schluss mit aufwendiger Zentrallogistik! Auf Wunsch beliefern
                wir Ihre Filialen direkt. Sie vereinbaren einmal die Konditionen
                mit uns, die Filialen bestellen selbst, und am Monatsende
                erhalten Sie eine übersichtliche Sammelrechnung.
              </p>
            </div>
          </div>

          <p className="pt-4 text-lg font-medium">
            👉 Nutzen Sie einfach unser Kontaktformular am Ende der Seite und
            fordern Sie Ihr unverbindliches Angebot an.
          </p>
        </div> */}

        <hr />

        {/* Form */}
        <div className="space-y-6">
          <form className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="vorname" className="block mb-2">Vorname</Label>
                <Input id="vorname" name="vorname" type="text" />
              </div>
              <div>
                <Label htmlFor="nachname" className="block mb-2">Nachname</Label>
                <Input id="nachname" name="nachname" type="text" />
              </div>
              <div>
                <Label htmlFor="firma" className="block mb-2">Firma</Label>
                <Input id="firma" name="firma" type="text" />
              </div>
              <div>
                <Label htmlFor="ansprechpartner" className="block mb-2">Ansprechpartner</Label>
                <Input id="ansprechpartner" name="ansprechpartner" type="text" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="strasse" className="block mb-2">Straße, Nr.</Label>
                <Input id="strasse" name="strasse" type="text" />
              </div>
              <div>
                <Label htmlFor="plz" className="block mb-2">PLZ</Label>
                <Input id="plz" name="plz" type="text" />
              </div>
              <div>
                <Label htmlFor="ort" className="block mb-2">Ort</Label>
                <Input id="ort" name="ort" type="text" />
              </div>
              <div>
                <Label htmlFor="telefon" className="block mb-2">Telefon</Label>
                <Input id="telefon" name="telefon" type="tel" />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">E-Mail</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="kundennummer" className="block mb-2">
                  Kundennummer (falls vorhanden)
                </Label>
                <Input id="kundennummer" name="kundennummer" type="text" />
              </div>
            </div>

            <hr />

            {/* Roll Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Details zur Bonrolle</h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <Label htmlFor="rollenart" className="block mb-2">Rollenart</Label>
                  <Select name="rollenart">
                    <SelectTrigger id="rollenart">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="thermorolle">Thermorolle</SelectItem>
                      <SelectItem value="normalpapierrolle">
                        Normalpapierrolle
                      </SelectItem>
                      <SelectItem value="additionsrolle-holzfrei">
                        Additionsrolle holzfrei
                      </SelectItem>
                      <SelectItem value="sonstige">Sonstige</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="breite" className="block mb-2">Breite (mm)</Label>
                  <Input id="breite" name="breite" type="number" />
                </div>
                <div>
                  <Label htmlFor="laenge" className="block mb-2">Länge (m)</Label>
                  <Input id="laenge" name="laenge" type="number" />
                </div>
                <div>
                  <Label htmlFor="kern" className="block mb-2">Kern (mm)</Label>
                  <Input id="kern" name="kern" type="number" />
                </div>
              </div>
              <div className="sm:max-w-xs">
                <Label htmlFor="menge" className="block mb-2">Benötigte Menge (in Kartons)</Label>
                <Input id="menge" name="menge" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lastschrifttext" name="lastschrifttext" />
                <Label htmlFor="lastschrifttext">mit Lastschrifttext</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rueckseitendruck"
                  name="rueckseitendruck"
                  checked={rueckseitendruck}
                  onCheckedChange={(checked) =>
                    setRueckseitendruck(Boolean(checked))
                  }
                />
                <Label htmlFor="rueckseitendruck">mit Rückseitendruck</Label>
              </div>
              {rueckseitendruck && (
                <div className="sm:max-w-xs">
                  <Label htmlFor="farben" className="block mb-2">Anzahl der Farben</Label>
                  <Input id="farben" name="farben" type="number" />
                </div>
              )}
            </div>

            <hr />

            {/* Message */}
            <div>
              <Label htmlFor="nachricht" className="block mb-2">Ihre Nachricht</Label>
              <Textarea
                id="nachricht"
                name="nachricht"
                rows={5}
                placeholder="Geben Sie hier Ihre Nachricht oder Sonderwünsche ein."
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start space-x-3">
              <Checkbox id="datenschutz" name="datenschutz" required />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="datenschutz">
                  Ich habe die{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  zur Kenntnis genommen.
                </Label>
              </div>
            </div>

            <div className="flex justify-center">
                <Button type="submit" size="lg">
                Anfrage senden
                </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
