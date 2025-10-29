import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  company: string
  delay?: number
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[var(--rc-surface)] rounded-2xl p-8 border border-[var(--rc-border)] hover:shadow-lg transition-shadow relative"
    >
      <div className="absolute top-8 left-8 text-[var(--rc-accent-500)] opacity-20">
        <Quote size={40} />
      </div>
      <div className="relative">
        <div className="w-1 h-12 bg-[var(--rc-accent-500)] rounded-full mb-6"></div>
        <p className="text-lg text-[var(--rc-text)] mb-6 leading-relaxed">
          "{quote}"
        </p>
        <div className="border-t border-[var(--rc-border)] pt-4">
          <p className="text-[var(--rc-text)]">{author}</p>
          <p className="text-sm text-[var(--rc-text-soft)]">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
