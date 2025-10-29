import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'Wie sicher ist ReportCube?',
      answer:
        'ReportCube nutzt Sicherheit auf Unternehmensniveau mit Ende-zu-Ende-Verschlüsselung, DSGVO-Konformität und ISO 27001-Zertifizierung. Alle Daten werden in sicheren europäischen Rechenzentren gespeichert und niemals mit Dritten geteilt.',
    },
    {
      question: 'Können wir unsere bestehenden Systeme anbinden?',
      answer:
        'Ja, ReportCube bietet umfassende API-Integrationen und unterstützt die meisten gängigen Versicherungsmanagementsysteme. Unser Team bietet vollständige Unterstützung während der Implementierung, um nahtlose Konnektivität zu gewährleisten.',
    },
    {
      question: 'Welche Daten werden von der KI analysiert?',
      answer:
        'Unsere KI analysiert Schadensfotos, Schadensberichte, Versicherungsunterlagen und Antragsformulare. Sie extrahiert relevante Informationen, validiert Datengenauigkeit und generiert strukturierte Berichte unter vollständiger Wahrung des Datenschutzes.',
    },
    // {
    //   question: 'Wie lange dauert die Implementierung?',
    //   answer:
    //     'Die meisten Kunden sind innerhalb von 2-4 Wochen vollständig einsatzbereit. Dies umfasst Systemintegration, Teamschulung und Workflow-Anpassung. Wir bieten während des gesamten Prozesses engagierte Unterstützung.',
    // },
    // {
    //   question: 'Welche Art von Support bieten Sie an?',
    //   answer:
    //     'Wir bieten 24/7 technischen Support, dediziertes Account Management, regelmäßige Schulungen und kontinuierliche Plattform-Updates. Ihr Erfolg ist unsere Priorität.',
    // },
    // {
    //   question: 'Gibt es eine Mindestvertragslaufzeit?',
    //   answer:
    //     'Wir bieten flexible Vertragsbedingungen ab 12 Monaten. Enterprise-Pläne können basierend auf Ihren spezifischen Anforderungen und Volumen angepasst werden.',
    // },
  ]

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[color:var(--rc-bg)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--rc-text)]">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)]">
            Alles, was Sie über ReportCube wissen müssen
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[var(--rc-surface)] border border-[var(--rc-border)] rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-[var(--rc-text)] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--rc-text-soft)] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
