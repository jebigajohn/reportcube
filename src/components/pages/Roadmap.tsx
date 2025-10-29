import { RoadmapHeader } from './RoadmapHeader'
import { RoadmapYearSection } from './RoadmapYearSection'

export function Roadmap() {
  const roadmap = [
    {
      yearLabel: '2025',
      phase: 'Pilot & Feinschliff (kurzfristig)',
      bullets: [
        'Pilotprojekte mit Versicherern & Sachverständigen starten',
        'Feedback aus der Praxis einarbeiten',
        'Module stabilisieren & finalisieren',
        'Web-App mit Analyse-Funktionen produktiv einsetzen',
        'Capital Raising',
      ],
    },
    {
      yearLabel: '2026',
      phase: 'Ausbau & mobile Erfassung (mittelfristig)',
      bullets: [
        'Erweiterung auf alle relevanten Gebäudeschäden (Sturm, Feuer, Leitungswasser …)',
        'Mobile App mit Vor-Ort-Erfassung & direkter Flächenanalyse voll ausstatten',
        'Schrittweise Verbesserung der Kalkulation auf Basis von BKI-Daten',
      ],
    },
    {
      yearLabel: '2027+',
      phase: 'Skalierung & Automatisierung (langfristig)',
      bullets: [
        'Ausbau der BKI-Kalkulations-AI bis zur vollen Einsatzreife',
        'Kooperationen mit großen Versicherungen & Schadendienstleistern',
        'Weitere Automatisierung, Workflows & API-Integration in Bestandssysteme',
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 md:py-32 bg-[color:var(--rc-bg)]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <RoadmapHeader
          title="Unsere Ziele & Roadmap"
          subtitle="Unsere aktuelle Roadmap"
        />

        <div className="relative">
          {roadmap.map((item, idx) => (
            <RoadmapYearSection
              key={item.yearLabel}
              yearLabel={item.yearLabel}
              phase={item.phase}
              bullets={item.bullets}
              isLast={idx === roadmap.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
