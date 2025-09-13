import type { Metadata } from 'next';
import AngebotForm from '@/components/AngebotForm';

export const metadata: Metadata = {
  title: "Anfrageformular",
  description: "Bei Fragen kontaktieren Sie uns bitte.",
};


export default function AngebotPage() {
  return (
    <main>
      <AngebotForm />
    </main>
  );
}