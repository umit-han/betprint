import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description:
    "Widerrufsbelehrung und Widerrufsformular der Yildiz Commercial GmbH.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          Widerrufsbelehrung
        </h1>

        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
          ab dem Tag des Vertragsabschlusses.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (YILDIZ Commercial
          GmbH, Albinistr. 9, 35576 Wetzlar, Telefon: 06441-5643606, E-Mail:
          info@yildizcommercial.de) mittels einer eindeutigen Erklärung (z. B.
          ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss,
          diesen Vertrag zu widerrufen, informieren. Sie können dafür das
          beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
          vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
          absenden.
        </p>

        <h2 className="pt-4 text-xl font-semibold">Folgen des Widerrufs</h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, einschließlich der Lieferkosten
          (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
          sie eine andere Art der Lieferung als die von uns angebotene
          günstigste Standardlieferung gewählt haben), unverzüglich und
          spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
          Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen
          ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das
          Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn,
          mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall
          werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </p>
        <p>
          Haben Sie verlangt, dass die Dienstleistung während der
          Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen
          Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie
          uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags
          unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum
          Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
        </p>

        <h2 className="pt-4 text-xl font-semibold">
          Hinweis auf die Möglichkeit eines vorzeitigen Erlöschens des
          Widerrufsrechts
        </h2>
        <p>
          Ihr Widerrufsrecht erlischt, wenn wir unsere Leistung vollständig
          erbracht haben und mit der Ausführung der Leistung erst begonnen
          haben, nachdem Sie Ihre ausdrückliche Zustimmung gegeben haben und
          gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr
          Widerrufsrecht bei vollständiger Vertragserfüllung durch uns
          verlieren.
        </p>

        <hr />

        <h2 className="pt-4 text-xl font-semibold">Widerrufsformular</h2>
        <p>
          Wenn Sie den Vertrag widerrufen möchten, dann füllen Sie bitte dieses
          Formular aus und senden Sie es zurück an:
        </p>
        <div className="rounded border bg-muted p-4">
          <p>
            <strong>Yildiz Commercial GmbH</strong>
            <br />
            Albinistr. 9
            <br />
            35576 Wetzlar
            <br />
            <strong>Tel.:</strong> 06441 5643606
            <br />
            <strong>E-Mail:</strong> info@yildizcommercial.de
          </p>
        </div>
        <p>
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
          Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der
          folgenden Dienstleistung (*):
        </p>
        <div className="space-y-2 border-l-2 pl-4">
          <p>– Bestellt am (*)/ erhalten am (*):</p>
          <p>– Name des/der Verbraucher(s):</p>
          <p>– Anschrift des/der Verbraucher(s):</p>
          <p>– Datum:</p>
          <p>
            – Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
            Papier):
          </p>
        </div>
        <p>(*) Unzutreffendes streichen.</p>
      </div>
    </main>
  );
}