interface RoadmapYearSectionProps {
  yearLabel: string
  phase: string
  bullets: string[]
  isLast?: boolean
}

export function RoadmapYearSection({
  yearLabel,
  phase,
  bullets,
  isLast = false,
}: RoadmapYearSectionProps) {
  return (
    <div
      className="relative flex gap-8 pb-12 md:pb-16"
      id={`roadmap-${yearLabel}`}
    >
      {/* Timeline – Jahresknoten */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--rc-accent-500)] text-white flex-shrink-0 shadow-sm">
          <span className="text-base font-medium">{yearLabel}</span>
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[color:var(--rc-accent-500)] to-[color:var(--rc-border)]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 -mt-1">
        <div className="bg-[color:var(--rc-bg)] border border-[color:var(--rc-border)] rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="mb-4 text-[color:var(--rc-text)]">{phase}</h3>

          <ul className="space-y-2">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[color:var(--rc-accent-500)] ">•</span>
                <span className="text-[color:var(--rc-text-soft)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
