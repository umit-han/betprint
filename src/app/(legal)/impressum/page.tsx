import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Yildiz Commercial GmbH.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          Impressum
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Yildiz Commercial GmbH</h2>
          <p>
            Albinistr. 9<br />
            35576 Wetzlar
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Tel.:</strong>{" "}
            <a
              href="tel:064415643606"
              className="text-primary hover:underline"
            >
              06441 5643606
            </a>
            <br />
            <strong>E-Mail:</strong>{" "}
            <a
              href="mailto:info@yildizcommercial.de"
              className="text-primary hover:underline"
            >
              info@yildizcommercial.de
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Geschäftsführer:</strong> Herr Özcan Yildiz
          </p>
          <p>
            Die Gesellschaft ist im Handelsregister eingetragen durch das
            Amtsgericht Wetzlar unter HRB 7333
          </p>
          <p>
            <strong>USt-ID gemäß § 27 a Umsatzsteuergesetz:</strong> DE313887067
          </p>
          <p>
            Gewerbeerlaubnis nach § 34 c GewO erteilt durch den Lahn-Dill-Kreis
          </p>
          <p>
            <strong>Berufskammer:</strong> IHK Wetzlar, Friedenstr. 2, 35578
            Wetzlar
          </p>
          <p>
            <strong>Aufsichtsbehörde ist</strong> Landrat des Lahn-Dill-Kreises,
            Ordnungsamt, Karl-Kellner-Ring 51, 35576 Wetzlar
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="http://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              http://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
        <p>
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            eRecht24
          </a>
        </p>
      </div>
    </main>
  );
}