import { TeamCard } from './TeamCard'

export function Team() {
  const teamMembers = [
    {
      name: 'Johann Balzer',
      role: 'Architekt & Schadenregulierer',
      // tagline: '15+ Jahre Versicherungs-KI-Innovation',
      imageUrl: '/fotos_personal/DSCF1167.jpg',
    },
    {
      name: 'Alexej Ebel',
      role: 'Laboratory Test Engineer ',
      // tagline: 'Leitet KI-Forschung und -Entwicklung',
      imageUrl: '/fotos_personal/DSCF1131_1.jpg',
    },
    {
      name: 'John Staub',
      role: 'AI Solutions Engineer',
      // tagline: 'Entwickelt intuitive Versicherungslösungen',
      imageUrl: '/fotos_personal/DSCF1152_1.jpg',
    },
  ]

  return (
    <section id="team" className="py-24 lg:py-32 bg-rc-surface bg-opacity-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6 text-rc-text">
            Lernen Sie unser Team kennen
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              // tagline={member.tagline}
              imageUrl={member.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
