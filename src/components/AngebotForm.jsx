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

export default function AngebotPage() {
  const [rueckseitendruck, setRueckseitendruck] = useState(false);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <h1 className="text-2xl font-bold tracking-tight text-center md:text-4xl">Anfrageformular</h1>

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
                  <a href="/terms" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
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
