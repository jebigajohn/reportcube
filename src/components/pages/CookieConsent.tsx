import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { CONSENT_STORAGE_KEY, type ConsentState } from '../types/consent'

const CONSENT_VERSION = '1.0.0'

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [consent, setConsent] = useState<ConsentState | null>(null)

  // initial load
  useEffect(() => {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ConsentState
        setConsent(parsed)
        setOpen(false)
      } catch {
        setOpen(true)
      }
    } else {
      setOpen(true)
    }
  }, [])

  // external trigger (Footer -> Cookie-Einstellungen)
  useEffect(() => {
    const handler = () => {
      setSettingsOpen(true)
      setOpen(true)
    }
    window.addEventListener('open-cookie-settings', handler as EventListener)
    return () =>
      window.removeEventListener(
        'open-cookie-settings',
        handler as EventListener
      )
  }, [])

  const tmp = useMemo<ConsentState>(
    () =>
      consent ?? {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString(),
        version: CONSENT_VERSION,
      },
    [consent]
  )

  const save = (next: ConsentState) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next))
    setConsent(next)
    // Optional: Event feuern, damit du z.B. Analytics initialisieren kannst
    window.dispatchEvent(
      new CustomEvent('cookie-consent-saved', { detail: next })
    )
  }

  const acceptAll = () => {
    save({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    })
    setOpen(false)
    setSettingsOpen(false)
  }

  const onlyEssential = () => {
    save({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    })
    setOpen(false)
    setSettingsOpen(false)
  }

  const saveSelection = () => {
    save({
      ...tmp,
      necessary: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    })
    setOpen(false)
    setSettingsOpen(false)
  }

  if (!open) return null

  return (
    // 🔽 schwebend: zentriert, mit Abstand nach unten
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] w-full px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--rc-border)] bg-[var(--rc-bg)] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <h4 className="text-[var(--rc-text)] m-0">Cookies & Daten</h4>
          <button
            aria-label="Schließen"
            onClick={() => setOpen(false)}
            className="p-2 rounded hover:bg-[var(--rc-surface)]"
          >
            <X size={18} className="text-[var(--rc-text-soft)]" />
          </button>
        </div>

        {/* Body */}
        {!settingsOpen ? (
          <div className="px-5 pb-5 text-[var(--rc-text-soft)]">
            Wir verwenden essenzielle Cookies und – nach deiner Zustimmung –
            optionale Cookies für Statistik und Marketing. Du kannst deine
            Auswahl jederzeit ändern.
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onlyEssential}
                className="w-full sm:w-auto rounded-md border border-[var(--rc-border)] px-4 py-2 hover:bg-[var(--rc-surface)]"
              >
                Nur essenziell
              </button>
              <button
                onClick={() => setSettingsOpen(true)}
                className="w-full sm:w-auto rounded-md border border-[var(--rc-border)] px-4 py-2 hover:bg-[var(--rc-surface)]"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptAll}
                className="w-full sm:w-auto rounded-md bg-[var(--rc-accent-500)] px-4 py-2 text-white hover:bg-[var(--rc-accent-400)]"
              >
                Alle akzeptieren
              </button>
            </div>
            <p className="mt-3 text-sm">
              Mehr Infos:{' '}
              <a className="underline hover:opacity-80" href="/datenschutz">
                Datenschutz
              </a>
            </p>
          </div>
        ) : (
          <div className="px-5 pb-5">
            <div className="space-y-4">
              <label className="flex items-center justify-between rounded-lg border border-[var(--rc-border)] p-3">
                <div>
                  <div className="font-medium text-[var(--rc-text)]">
                    Essenziell
                  </div>
                  <div className="text-sm text-[var(--rc-text-soft)]">
                    Erforderlich für den Betrieb der Website
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="h-5 w-5 accent-[var(--rc-accent-500)]"
                />
              </label>

              <label className="flex items-center justify-between rounded-lg border border-[var(--rc-border)] p-3">
                <div>
                  <div className="font-medium text-[var(--rc-text)]">
                    Statistik
                  </div>
                  <div className="text-sm text-[var(--rc-text-soft)]">
                    Anonymisierte Nutzungsmessung
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[var(--rc-accent-500)]"
                  checked={tmp.analytics}
                  onChange={(e) =>
                    setConsent({ ...tmp, analytics: e.target.checked })
                  }
                />
              </label>

              <label className="flex items-center justify-between rounded-lg border border-[var(--rc-border)] p-3">
                <div>
                  <div className="font-medium text-[var(--rc-text)]">
                    Marketing
                  </div>
                  <div className="text-sm text-[var(--rc-text-soft)]">
                    z. B. eingebettete Videos, Kampagnen
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[var(--rc-accent-500)]"
                  checked={tmp.marketing}
                  onChange={(e) =>
                    setConsent({ ...tmp, marketing: e.target.checked })
                  }
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSettingsOpen(false)}
                className="w-full sm:w-auto rounded-md border border-[var(--rc-border)] px-4 py-2 hover:bg-[var(--rc-surface)]"
              >
                Zurück
              </button>
              <button
                onClick={saveSelection}
                className="w-full sm:w-auto rounded-md bg-[var(--rc-accent-500)] px-4 py-2 text-white hover:bg-[var(--rc-accent-400)]"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// von überall aufrufbar:
export function openCookieSettings() {
  window.dispatchEvent(new Event('open-cookie-settings'))
}
