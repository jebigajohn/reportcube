// src/components/hooks/useRouter.ts
import { useEffect, useState } from 'react'

export function useRouter() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    // wir horchen auf popstate (Browser-Back) und unser manuelles Dispatch
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to)
      // 🔥 Wichtig: globales Event feuern, damit andere Instanzen updaten
      window.dispatchEvent(new Event('popstate'))
    }
  }

  return { path, navigate }
}
