import { motion } from 'motion/react'

export function VisionMission() {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl lg:text-6xl mb-8 text-[var(--rc-text)]">
            Klarheit durch Intelligenz.
          </h2>
          <div className="space-y-6 text-lg text-[var(--rc-text-soft)] max-w-3xl mx-auto">
            <p>
              Wir glauben, dass Versicherungsberichte effizient, präzise und
              transparent sein sollten. Durch die Kombination von modernster KI
              mit fundierter Versicherungsexpertise transformieren wir die Art
              und Weise, wie Schadensfälle dokumentiert und bearbeitet werden.
            </p>
            <p>
              Unsere Mission ist es, Versicherungsexperten mit Werkzeugen
              auszustatten, die repetitive Aufgaben eliminieren, Fehler
              reduzieren und relevante Erkenntnisse liefern – und das alles
              unter Einhaltung höchster Standards für Datensicherheit und
              Compliance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
