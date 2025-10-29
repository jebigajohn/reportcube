import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-[var(--rc-surface)] rounded-2xl p-8 border border-[var(--rc-border)] hover:shadow-lg transition-all"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--rc-surface)] text-[var(--rc-accent-500)] mb-5">
        {icon}
      </div>
      <h3 className="text-xl mb-3 text-[var(--rc-text)]">{title}</h3>
      <p className="text-[var(--rc-text-soft)]">{description}</p>
    </motion.div>
  )
}
