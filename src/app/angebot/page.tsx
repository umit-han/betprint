import type { Metadata } from 'next';
import AngebotForm from '@/components/AngebotForm';

export const metadata: Metadata = {
  title: "Individuelles Angebot anfordern",
  description: "Benötigen Sie größere Mengen an Thermorollen? Fordern Sie hier Ihr individuelles und unverbindliches Angebot an. Speziell für den Bedarf von Wettbüros.",
  keywords: ["Angebot anfordern", "Individuelles Angebot", "Thermorollen", "Wettbürobedarf", "Betprint", "Yildiz Commercial GmbH"],
};


export default function AngebotPage() {
  return (
    <main>
      <AngebotForm />
    </main>
  );
}