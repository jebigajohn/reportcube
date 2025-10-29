import { motion } from 'motion/react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

interface TeamCardProps {
  name: string
  role: string
  // tagline: string
  imageUrl: string
  delay?: number
}

export function TeamCard({
  name,
  role,
  // tagline,
  imageUrl,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[var(--rc-bg)] rounded-2xl overflow-hidden border border-[var(--rc-border)] hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square overflow-hidden bg-[var(--rc-surface)]">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-1 text-[var(--rc-text)]">{name}</h3>
        <p className="text-sm text-[var(--rc-accent-500)] mb-2">{role}</p>
        {/* <p className="text-sm text-[var(--rc-text-soft)]">{tagline}</p> */}
      </div>
    </motion.div>
  )
}
