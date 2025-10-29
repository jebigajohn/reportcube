import { motion } from 'motion/react'
import {
  Timer,
  Target,
  PiggyBank,
  BadgeCheck,
  ReceiptText,
  Scale,
} from 'lucide-react'

export function ProductOverview() {
  const benefits = [
    {
      icon: <Timer size={22} />,
      title: 'Zeitersparnis bei der Schadenabwicklung',
      description:
        'Erfassung, Analyse und Kalkulation laufen in einem Schritt. Schäden werden in Minuten statt Stunden bewertet – mit weniger Rückfragen und schnellerer Regulierung.',
    },
    {
      icon: <Target size={22} />,
      title: 'Entlastung & Fokus',
      description:
        'Routineaufgaben laufen automatisch. Ihr Team konzentriert sich auf die Fälle, die echte Aufmerksamkeit brauchen.',
    },
    {
      icon: <PiggyBank size={22} />,
      title: 'Sichere Reservenbildung',
      description:
        'Realistische und nachvollziehbare Rückstellungen – fundiert aus Bilddaten, Angaben und Regelwerk.',
    },
    {
      icon: <BadgeCheck size={22} />,
      title: 'Qualität & Konsistenz',
      description:
        'Standardisierte Berichte mit reproduzierbaren Ergebnissen – klare Struktur, weniger Interpretationsspielraum.',
    },
    {
      icon: <ReceiptText size={22} />,
      title: 'Belegprüfungen',
      description:
        'KI-gestützte Analyse von Rechnungen und Kostenvoranschlägen: auch Nicht-Baufachleute liefern fachlich korrekte, nachvollziehbare Antworten.',
    },
    {
      icon: <Scale size={22} />,
      title: 'Fundierte Entscheidungen',
      description:
        'Klare, geprüfte Daten schaffen Sicherheit bei jeder Regulierung – auf Basis der internen Bedingungswerke.',
    },
  ]

  return (
    <section id="product" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--rc-text)]">
            Ihre Vorteile mit ReportCube
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)] max-w-3xl mx-auto">
            Die KI-gestützte Plattform für digitale Schadenregulierung: weniger
            manuelle Arbeit, klare Ergebnisse und mehr Tempo im gesamten
            Prozess.
          </p>
        </motion.div>

        {/* Benefit Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-[var(--rc-border)] bg-[var(--rc-surface)] p-6 text-left hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--rc-accent-500)] text-white flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-[var(--rc-text)] text-lg">{b.title}</h3>
              </div>
              <p className="text-[var(--rc-text-soft)] text-sm leading-relaxed pl-13">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-10 border border-[var(--rc-border)] bg-[var(--rc-surface)] rounded-2xl p-6"
        >
          <blockquote className="text-[var(--rc-text)] italic">
            „Mit ReportCube schaffen wir eine Arbeitsweise, die spürbar
            entlastet: Routineaufgaben erledigt die Plattform, Sie konzentrieren
            sich auf die wichtigen Entscheidungen. Gleichzeitig liefern wir
            geprüfte Daten, verlässliche Berichte und eine sichere Grundlage für
            Rückstellungen – so treffen Sie Entscheidungen, die sitzen.“
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
