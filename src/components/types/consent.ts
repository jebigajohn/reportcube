// types/consent.ts (optional eigener Ordner)
export type ConsentState = {
  necessary: boolean // immer true bei uns
  analytics: boolean
  marketing: boolean
  timestamp: string
  version: string // z.B. "1.0.0"
}

export const CONSENT_STORAGE_KEY = 'rc_cookie_consent_v1'

export function getConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ConsentState) : null
  } catch {
    return null
  }
}

export function hasConsent(scope: 'analytics' | 'marketing'): boolean {
  const c = getConsent()
  return !!c && c[scope] === true
}
