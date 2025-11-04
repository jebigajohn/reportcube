import {
  Brain,
  Database,
  FileBarChart,
  Calculator,
  ShieldCheck,
} from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export function FeaturesGrid() {
  const features = [
    {
      icon: <Brain size={28} />,
      title: 'KI-gestützte Analyse',
      description:
        'Erkennt Schadentypen, betroffene Bauteile und Schweregrade automatisch – auf Basis von Fotos, Dokumenten und Nutzerangaben.',
    },
    {
      icon: <Calculator size={28} />,
      title: 'Automatische Kalkulation',
      description:
        'Erstellt Wiederherstellungskosten und Reserven in Echtzeit – regelbasiert und lernfähig durch Daten aus echten Fällen.',
    },
    {
      icon: <FileBarChart size={28} />,
      title: 'Intelligente Berichtserstellung',
      description:
        'Generiert prüfungssichere Reports inklusive Begründungen, Foto-Referenzen und strukturiertem Anhang – vollautomatisch.',
    },
    {
      icon: <Database size={28} />,
      title: 'Ersatzpflichtprüfung',
      description:
        'Prüft Schadenpositionen nach Bedingungswerk und dokumentiert, welche Kosten erstattungsfähig sind.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Sichere Datenverarbeitung',
      description:
        'DSGVO-konform, verschlüsselt und gehostet auf Servern innerhalb der EU – inklusive rollenbasierter Zugriffskontrolle.',
    },
  ]

  return (
    <section id="features" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--rc-text)]">
            Digitale Schadenregulierung neu definiert
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)] max-w-3xl mx-auto">
            Report Cube verbindet Fachwissen, Daten und smarte Algorithmen – für
            schnellere, transparentere und nachvollziehbare Entscheidungen im
            Schadenprozess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
