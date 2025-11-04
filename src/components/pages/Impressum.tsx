export default function Impressum() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="mb-6 text-[color:var(--rc-text)]">Impressum</h1>

        <div className="space-y-6 text-[color:var(--rc-text-soft)]">
          <p>
            <strong>Angaben gemäß § 5 TMG:</strong>
          </p>

          <p>
            <strong>Report Cube Gesellschaft bürgerlichen Rechts (GbR)</strong>
            <br />
            Vertreten durch die Gesellschafter:
            <br />
            Johann Balzer
            <br />
            John Staub
            <br />
            Alexej Ebel
            <br />
            <br />
            Anschrift:
            <br />
            Thomas-Mann-Str. 12
            <br />
            59329 Wadersloh
            <br />
            Deutschland
          </p>

          <p>
            <strong>Kontakt:</strong>
            <br />
            E-Mail:{' '}
            <a href="mailto:service@reportcube.de" className="underline">
              service@reportcube.de
            </a>
          </p>

          <p>
            <strong>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </strong>
            <br />
            John Staub
            <br />
            {/* [Adresse wiederholen oder weglassen, falls identisch] */}
          </p>

          <p className="text-sm leading-relaxed">
            <strong>Haftung für Inhalte: </strong>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
            <br />
            <br />
            <strong>Haftung für Links: </strong>
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen.
          </p>

          <p className="text-sm text-[color:var(--rc-text-soft)]">
            Quelle: Eigene Angaben, angepasst an § 5 TMG & § 18 MStV
          </p>
        </div>
      </div>
    </section>
  )
}
