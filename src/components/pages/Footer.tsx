// src/components/pages/Footer.tsx
import { useTheme } from './ThemeProvider'
import { Separator } from '../ui/separator'
import { useRouter } from '../hooks/useRouter'

// robustes Scrollen (wartet bis das Ziel im DOM ist)
const scrollToId = (id: string) => {
  const tryScroll = (retries = 16) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (retries > 0) requestAnimationFrame(() => tryScroll(retries - 1))
  }
  tryScroll()
}

export function Footer() {
  const { theme } = useTheme()
  const { path, navigate } = useRouter()

  const goHome = (id: string = 'hero') => {
    if (path !== '/') {
      navigate('/') // triggert popstate → App rendert Homepage
      scrollToId(id) // wartet bis #hero vorhanden ist
    } else {
      scrollToId(id)
    }
  }

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'))
  }

  return (
    <footer className="bg-[var(--rc-surface)] text-[var(--rc-text)] pt-14 pb-10 border-t border-[var(--rc-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 mb-10">
          {/* Marke */}
          <div className="col-span-2">
            <button
              onClick={() => goHome('hero')}
              aria-label="Zur Startseite"
              className="flex items-center gap-3 mb-4"
            >
              <img
                src={theme === 'dark' ? 'logo-dark.png' : 'logo-light.png'}
                alt="ReportCube"
                className="h-12 w-auto cursor-pointer"
              />
            </button>
            <p className="text-[var(--rc-text-soft)] text-sm leading-relaxed max-w-prose">
              ReportCube ist eine KI-gestützte Plattform für Versicherungen.{' '}
              <br />
              Wir unterstützen bei Schadenaufnahme, Analyse, Kalkulation und
              Reporting – schnell, präzise und DSGVO-konform.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="mb-3 font-medium">Kontakt</h4>
            <ul className="space-y-2 text-sm text-[var(--rc-text-soft)]">
              <li>ReportCube GbR</li>
              <li>Thomas-Mann-Str. 12 · 59329 Wadersloh</li>
              <li>
                E-Mail:{' '}
                <a
                  className="underline hover:opacity-80"
                  href="mailto:service@reportcube.de"
                >
                  service@reportcube.de
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="mb-3 font-medium">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('/impressum')}
                  className="text-[var(--rc-text-soft)] hover:text-[var(--rc-text)] transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/datenschutz')}
                  className="text-[var(--rc-text-soft)] hover:text-[var(--rc-text)] transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button
                  onClick={openCookieSettings}
                  className="text-[var(--rc-text-soft)] hover:text-[var(--rc-text)] transition-colors underline cursor-pointer"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-[var(--rc-border)] mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--rc-text-soft)]">
          <p>© {new Date().getFullYear()} ReportCube GbR</p>
          <div className="flex gap-6">{/* Socials optional */}</div>
        </div>
      </div>
    </footer>
  )
}
