import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using our services",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        <h1 className="py-5 text-xl md:text-2xl font-bold">Über uns</h1>
        <p>
          Wir sind ein mittelständisches Unternehmen aus Hessen mit einem klaren Anspruch:
          nachhaltige und zugleich praxisnahe Lösungen für den täglichen Geschäftsbedarf. Unser
          Schwerpunkt liegt auf dem Online-Vertrieb von hochwertigen Thermorollen, die
          ausschließlich in deutschen Papierfabriken gefertigt werden – nach strengen Umwelt- und
          Qualitätsstandards.
        </p>
        <p>
          Nach den Angaben unserer Hersteller werden die angebotenen Thermorollen ohne den
          Einsatz von Bisphenolen (BPA, BPS, BPF) sowie ohne phenolhaltige Farbentwickler
          produziert. Damit bieten wir Ihnen eine verlässliche und umweltbewusste Alternative zu
          herkömmlichem Thermopapier.
        </p>
        <h2 className="mt-10 py-5 text-xl font-bold">Nachhaltig. Vertrauenswürdig. Einfach bestellbar.</h2>
      </div>
    </main>
  );
}