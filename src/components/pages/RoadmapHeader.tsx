interface RoadmapHeaderProps {
  title?: string
  subtitle?: string
}

export function RoadmapHeader({
  title = 'Unsere Ziele & Roadmap',
  subtitle = 'Unsere aktuelle Roadmap',
}: RoadmapHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h1 className="mb-2 text-[color:var(--rc-text)] text-5xl">{title}</h1>
    </div>
  )
}
