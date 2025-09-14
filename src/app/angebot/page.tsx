import type { Metadata } from 'next';
import AngebotForm from '@/components/AngebotForm';

export const metadata: Metadata = {
  title: "Individuelles Angebot anfordern",
  description: "Benötigen Sie größere Mengen an Wettkassenzetteln oder Thermorollen? Fordern Sie hier Ihr individuelles und unverbindliches Angebot an. Speziell für den Bedarf von Wettbüros.",
};


export default function AngebotPage() {
  return (
    <main>
      <AngebotForm />
    </main>
  );
}