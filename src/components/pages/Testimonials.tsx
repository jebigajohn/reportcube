import { TestimonialCard } from './TestimonialCard'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'ReportCube hat unseren Schadenbearbeitungsprozess transformiert. Was früher Stunden dauerte, nimmt jetzt nur Minuten in Anspruch, und die Genauigkeit ist bemerkenswert.',
      author: 'Marcus Hoffmann',
      position: 'Schadensdirektor',
      company: 'Provinzial Versicherung',
    },
    {
      quote:
        'Die KI-gestützte Analyse erfasst Details, die wir manuell möglicherweise übersehen hätten. Es ist wie ein Expertenassistent bei jedem Fall.',
      author: 'Elena Schneider',
      position: 'Senior Schadensachbearbeiterin',
      company: 'Allianz Deutschland',
    },
    {
      quote:
        'Die Implementierung verlief reibungslos, und der ROI war bereits im ersten Monat sichtbar. Unser Team bearbeitet nun 3x mehr Fälle mit denselben Ressourcen.',
      author: 'Jürgen Fischer',
      position: 'Leiter Operations',
      company: 'Munich Re',
    },
  ]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-[var(--rc-warning)] text-[var(--rc-warning)]"
              />
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--rc-text)]">
            Vertraut von Profis
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)] max-w-3xl mx-auto">
            Sehen Sie, wie ReportCube Versicherungsunternehmen dabei hilft,
            schnellere und genauere Ergebnisse zu liefern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
