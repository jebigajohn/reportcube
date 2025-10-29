import { motion } from 'motion/react'
import {
  Camera,
  FileSearch,
  Brain,
  Calculator,
  Database,
  Filter,
  Shield,
  Users,
  TrendingUp,
} from 'lucide-react'

export function AITechnology() {
  const modules = [
    {
      icon: <Camera size={32} />,
      title: 'Datenaufnahme',
      description:
        'Erfasst alle relevanten Informationen, Fotos und Dokumente – inklusive automatischer Flächen- und Volumenerkennung aus Bildern und Grundrissen.',
    },
    {
      icons: [
        { icon: <Brain size={28} />, label: 'KI-Engine' },
        { icon: <FileSearch size={28} />, label: 'Plausibilitätsprüfung' },
        { icon: <Filter size={28} />, label: 'Inhaltsfilter' },
      ],
      title: 'Datenanalyse',
      description:
        'Analysiert Daten in Echtzeit, filtert sensible Inhalte, prüft Plausibilität und erstellt automatisch Berichte mit erster Kostenschätzung.',
      isAnalysis: true,
    },
    {
      icons: [
        { icon: <Calculator size={28} />, label: 'Kalkulation' },
        { icon: <Database size={28} />, label: 'BKI-Daten' },
        { icon: <TrendingUp size={28} />, label: 'AI-Modell' },
      ],
      title: 'BKI-Kostenplanung-AI',
      description:
        'Nutzt geprüfte BKI-Kennwerte und eine spezialisierte KI, um zuverlässige Reserven zu bilden und Wiederherstellungskosten präzise zu kalkulieren.',
      isAnalysis: true,
    },
  ]

  const badges = [
    { icon: <Shield size={24} />, text: 'DSGVO-konform' },
    { icon: <Users size={24} />, text: 'Human-in-Loop validiert' },
  ]

  return (
    <section id="ai-tech" className="py-24 lg:py-32 bg-[var(--rc-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--rc-text)]">
            Module im Überblick
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)] max-w-3xl mx-auto">
            ReportCube vereint Fachwissen, Daten und künstliche Intelligenz in
            drei Kernmodulen, die den gesamten Schadenprozess digitalisieren –
            von der Erfassung bis zur automatisierten Kostenplanung.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 items-stretch justify-center">
          {modules.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-[var(--rc-bg)] rounded-2xl p-8 text-center border border-[var(--rc-border)] hover:shadow-lg transition-shadow h-full flex flex-col justify-between items-center">
                {/* Icon-Block */}
                {!step.isAnalysis ? (
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--rc-accent-500)] text-white mb-6">
                    {step.icon}
                  </div>
                ) : (
                  <div className="flex justify-center gap-6 mb-6">
                    {step.icons?.map((ic, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--rc-accent-500)] text-white mb-2">
                          {ic.icon}
                        </div>
                        <span className="text-sm text-[var(--rc-text-soft)]">
                          {ic.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Titel & Beschreibung */}
                <h3 className="text-xl mb-2 text-[var(--rc-text)]">
                  {step.title}
                </h3>
                <p className="text-[var(--rc-text-soft)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Verbindungspfeil */}
              {index < modules.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-7 transform -translate-y-1/2 text-[var(--rc-gray-300)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[var(--rc-bg)] px-6 py-4 rounded-full border border-[var(--rc-border)] shadow-sm"
            >
              <div className="text-[var(--rc-accent-500)]">{badge.icon}</div>
              <span className="text-[var(--rc-text)]">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
