import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '../ui/button'
import { useTheme } from './ThemeProvider'
import { useRouter } from '../hooks/useRouter'

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

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { path, navigate } = useRouter()

  const goToSection = (id: string) => {
    if (path !== '/') {
      navigate('/')

      scrollToId(id)
    } else {
      scrollToId(id)
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <button
              onClick={() => goToSection('hero')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt="ReportCube"
                className="h-20 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => goToSection('product')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Vorteile
            </button>
            <button
              onClick={() => goToSection('ai-tech')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Überblick
            </button>

            <button
              onClick={() => goToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Funktionen
            </button>
            <button
              onClick={() => goToSection('roadmap')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Roadmap
            </button>
            <button
              onClick={() => goToSection('team')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Team
            </button>
            <button
              onClick={() => goToSection('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              FAQ
            </button>

            <Button
              onClick={() => goToSection('cta')}
              className="bg-[var(--rc-accent-500)] hover:bg-[var(--rc-accent-400)] text-white cursor-pointer"
            >
              Kontakt anfragen
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
              aria-label="Theme umschalten"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Theme umschalten"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {[
              { id: 'product', label: 'Vorteile' },
              { id: 'ai-tech', label: 'Überblick' },
              { id: 'features', label: 'Funktionen' },
              { id: 'roadmap', label: 'Roadmap' },
              { id: 'team', label: 'Team' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => goToSection('cta')}
              className="w-full bg-[var(--rc-accent-500)] hover:bg-[var(--rc-accent-400)] text-white cursor-pointer"
            >
              Kontakt anfragen
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
