import './index.css'

import { useEffect } from 'react'
import { hasConsent } from './components/types/consent' // Pfad so belassen, wenn Datei bei dir dort liegt

// Seiten
import Impressum from './components/pages/Impressum'
import Datenschutz from './components/pages/Datenschutz'
import { ThemeProvider } from './components/pages/ThemeProvider'
import { NavBar } from './components/pages/NavBar'
import { Hero } from './components/pages/Hero'
import { ProductOverview } from './components/pages/ProductOverview'
import { AITechnology } from './components/pages/AITechnology'
import { VisionMission } from './components/pages/VisionMission'
import { FeaturesGrid } from './components/pages/FeaturesGrid'
import { Roadmap } from './components/pages/Roadmap'
import { Team } from './components/pages/Team'
import { FAQ } from './components/pages/FAQ'
import { CallToAction } from './components/pages/CallToAction'
import { CookieConsent } from './components/pages/CookieConsent'

import { useRouter } from './components/hooks/useRouter'
import { Footer } from './components/pages/Footer'

export default function App() {
  const { path } = useRouter()

  useEffect(() => {
    function init(e?: CustomEvent) {
      const allowAnalytics = e?.detail?.analytics ?? hasConsent('analytics')
      if (allowAnalytics) {
        // Analytics init
      }
    }
    init()
    const handler = (ev: Event) => init(ev as CustomEvent)
    window.addEventListener('cookie-consent-saved', handler)
    return () => window.removeEventListener('cookie-consent-saved', handler)
  }, [])

  // einfacher Switch
  const isImpressum = path === '/impressum'
  const isDatenschutz = path === '/datenschutz'

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <NavBar />
        <main>
          {isImpressum ? (
            <Impressum />
          ) : isDatenschutz ? (
            <Datenschutz />
          ) : (
            <>
              <Hero />
              <ProductOverview />
              <AITechnology />
              {/* <VisionMission /> */}
              <FeaturesGrid />
              <Roadmap />
              <Team />
              <FAQ />
              <CallToAction />
            </>
          )}
          <CookieConsent />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
