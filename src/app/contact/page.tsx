import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold md:text-4xl">Kontaktieren Sie uns</h1>
        <p className="mt-2 text-muted-foreground">
          Haben Sie Fragen oder Feedback? Wir würden uns freuen, von Ihnen zu
          hören.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">Nachricht senden</h2>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ihr Name</Label>
              <Input id="name" name="name" placeholder="Ihr Name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Ihre E-Mail-Adresse</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Ihre Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Schreiben Sie Ihre Nachricht hier..."
                required
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full">
              Senden
            </Button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Kontaktinformationen</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p>
                Albinistraße 9, 35576 Wetzlar
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+4964415643606" className="hover:underline">
                  +49 6441 56 43 606
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@betprint.de" className="hover:underline">
                  info@betprint.de
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Karte</h2>
            <div className="aspect-w-16 aspect-h-9 mt-4 overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.820574836015!2d8.49752757697815!3d50.56218107161413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc0108a045f317%3A0x5d6c4135c3531b1d!2sAlbinistra%C3%9Fe%209%2C%2035576%20Wetzlar%2C%20Germany!5e0!3m2!1sen!2sus!4v1716386569123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
