import { motion } from 'motion/react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { withBase } from '../../utils/basePath'

export function CallToAction() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | 'ok' | 'error'>(null)
  const API_BASE = import.meta.env.VITE_API_BASE

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      alert(
        'Bitte bestätigen Sie die Einwilligung zur Kontaktaufnahme, bevor Sie fortfahren.'
      )
      return
    }

    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName || company || email,
          email,
          phone: '',
          message:
            message ||
            `Firma: ${company || '—'}\nEinwilligung: ${consent ? 'Ja' : 'Nein'}`,
          topic: 'Website CTA',
        }),
      })

      const data = await res.json()
      if (!res.ok || !data?.ok) throw new Error('send_failed')

      setStatus('ok')
      setEmail('')
      setFullName('')
      setCompany('')
      setMessage('')
      setConsent(false)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="py-24 lg:py-32 bg-[var(--rc-bg)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--rc-accent-500)] dark:bg-[var(--rc-accent-400)] rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl mb-6 font-medium">
              Interesse an Report Cube?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Erfahren Sie, wie KI Ihre Schadenbearbeitung vereinfachen kann –
              und wie Report Cube Sie dabei unterstützt, Zeit und Aufwand zu
              sparen.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col gap-3 text-left"
            >
              <Input
                type="text"
                placeholder="Ihr Name (optional)"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="py-5 bg-[var(--rc-white)] text-[var(--rc-gray-900)] border border-[var(--rc-border)] rounded-xl"
              />
              <Input
                type="text"
                placeholder="Firma (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="py-5 bg-[var(--rc-white)] text-[var(--rc-gray-900)] border border-[var(--rc-border)] rounded-xl"
              />
              <Input
                type="email"
                placeholder="ihre.email@firma.de"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-5 bg-[var(--rc-white)] text-[var(--rc-gray-900)] border border-[var(--rc-border)] rounded-xl"
              />
              <textarea
                placeholder="Ihre Nachricht (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="py-4 px-4 min-h-[100px] bg-[var(--rc-white)] text-[var(--rc-gray-900)] border border-[var(--rc-border)] rounded-xl focus-visible:ring-2 focus-visible:ring-[var(--rc-accent-400)]"
              />

              {/* ✅ DSGVO Checkbox */}
              <label className="flex items-start gap-3 mt-2 text-sm text-[var(--rc-gray-100)]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-[2px] w-4 h-4 accent-[var(--rc-primary-500)] cursor-pointer"
                  required
                />
                <span>
                  Ich bin damit einverstanden, dass meine Daten zur Bearbeitung
                  meiner Anfrage und zur Kontaktaufnahme gespeichert und
                  verarbeitet werden. Weitere Informationen finden Sie in
                  unserer{' '}
                  <a
                    href={withBase('/datenschutz')}
                    onClick={(e) => {
                      e.preventDefault()
                      const url = withBase('/datenschutz')
                      window.history.pushState({}, '', url)
                      window.dispatchEvent(new PopStateEvent('popstate'))
                    }}
                    className="underline text-[var(--rc-white)] hover:text-[var(--rc-gray-200)]"
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </span>
              </label>

              <Button
                type="submit"
                disabled={loading}
                className="mt-4 bg-[var(--rc-primary-500)] hover:bg-[var(--rc-primary-700)] text-white px-8 py-6 rounded-xl transition-all hover:shadow-lg disabled:opacity-70"
              >
                {loading ? 'Senden…' : 'Kontakt anfragen'}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>

            {status === 'ok' && (
              <p className="text-sm mt-6 opacity-90">
                Danke! Wir haben Ihre Anfrage erhalten und melden uns zeitnah.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm mt-6 opacity-90">
                Uups – etwas ist schiefgelaufen. Bitte versuchen Sie es später
                erneut.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
