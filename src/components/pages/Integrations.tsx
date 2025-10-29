import { motion } from 'motion/react'

export function Integrations() {
  // Mock partner logos as text for demonstration
  const partners = [
    'Provinzial',
    'Allianz',
    'AXA',
    'Munich Re',
    'Generali',
    'Swiss Re',
  ]

  return (
    <section id="integrations" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--rc-text)]">
            Vertraut von Branchenführern
          </h2>
          <p className="text-lg text-[var(--rc-text-soft)]">
            Nahtlose Integration in bestehende Versicherungssysteme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="text-center">
                <div className="w-24 h-16 bg-[var(--rc-surface)] rounded-lg flex items-center justify-center border border-[var(--rc-border)]">
                  <span className="text-sm text-[var(--rc-gray-500)]">
                    {partner}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
