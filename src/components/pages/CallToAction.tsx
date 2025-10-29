import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export function CallToAction() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Kontakt-Anfrage eingereicht für: ${email}\nWir melden uns zeitnah mit weiteren Informationen.`
    )
    setEmail('')
  }

  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-[var(--rc-surface)] from-background to-[var(--rc-surface)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--rc-accent-500)] dark:bg-[var(--rc-accent-400)] rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/60 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl mb-6 font-medium">
              Interesse an ReportCube?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Erfahren Sie, wie KI Ihre Schadenbearbeitung vereinfachen kann –
              und wie ReportCube Sie dabei unterstützt, Zeit und Aufwand zu
              sparen.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--rc-gray-500)]"
                    size={20}
                  />
                  <Input
                    type="email"
                    placeholder="ihre.email@firma.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 py-6 bg-[var(--rc-white)] text-[var(--rc-gray-900)] border border-[var(--rc-border)] rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--rc-accent-400)]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[var(--rc-primary-500)] hover:bg-[var(--rc-primary-700)] text-white px-8 py-6 rounded-xl transition-all hover:shadow-lg cursor-pointer"
                >
                  Kontakt anfragen
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </form>

            <p className="text-sm mt-6 opacity-80">
              Wir melden uns persönlich mit weiteren Informationen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
