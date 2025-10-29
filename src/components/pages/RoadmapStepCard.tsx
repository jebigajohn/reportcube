interface RoadmapStepCardProps {
  stepNumber: number
  title: string
  bullets: string[]
  dod: string
  isLast?: boolean
}

export function RoadmapStepCard({
  stepNumber,
  title,
  bullets,
  dod,
  isLast = false,
}: RoadmapStepCardProps) {
  return (
    <div
      className="relative flex gap-8 pb-12 md:pb-16"
      id={`step-${stepNumber}`}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Step Number Circle */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[color:var(--rc-accent-500)] text-white flex-shrink-0 transition-transform hover:scale-110">
          <span className="text-lg">{stepNumber}</span>
        </div>

        {/* Timeline Connector */}
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[color:var(--rc-accent-500)] to-[color:var(--rc-border)]" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 -mt-1">
        <div className="bg-[color:var(--rc-surface)] border border-[color:var(--rc-border)] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="mb-4 text-[color:var(--rc-text)]">{title}</h3>

          <ul className="space-y-2 mb-6">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[color:var(--rc-accent-500)] mt-1.5 flex-shrink-0">
                  •
                </span>
                <span className="text-[color:var(--rc-text-soft)]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-[color:var(--rc-border)]">
            <p className="text-sm italic text-[color:var(--rc-text-soft)]">
              <span className="text-[color:var(--rc-accent-500)] not-italic mr-2">
                DoD:
              </span>
              {dod}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
