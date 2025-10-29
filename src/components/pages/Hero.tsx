import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b  from-[var(--rc-bg)] to-[var(--rc-surface)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-[60ch] mx-auto lg:mx-0 lg:pr-12 xl:pr-20"
          >
            <h1 className="text-5xl  leading-tight mb-6 text-[var(--rc-text)] hyphens-auto">
              KI-gestützte Schadenregulierung.
              <span className="block mt-2">Schnell. Präzise. Sicher.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--rc-text-soft)] mb-8 max-w-[58ch] mx-auto lg:mx-0">
              ReportCube verbindet künstliche Intelligenz mit
              Versicherungsexpertise, um prüfungssichere Schadensberichte in
              Minuten zu erstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('cta')}
                className="bg-[var(--rc-accent-500)] hover:bg-[var(--rc-accent-400)] text-white px-8 py-6 transition-all hover:shadow-lg cursor-pointer"
              >
                Kontakt anfragen
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-6 xl:pl-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--rc-border)]">
              <ImageWithFallback
                // src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYxNTU3NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                src="tool2.png"
                alt="ReportCube Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--rc-accent-500)]/10 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[var(--rc-bg)] px-6 py-3 rounded-full shadow-lg border border-[var(--rc-border)]"
            >
              <p className="text-sm text-[var(--rc-text)]">
                <span className="text-[var(--rc-accent-500)]">95%</span>{' '}
                schnellere Berichterstellung
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
