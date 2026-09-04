import { useEffect, useState } from 'react'
import { navLinks, personal } from '../data/portfolio'
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map((l) => l.id)
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <button
          type="button"
          className="navbar-logo"
          onClick={() => goTo('home')}
          aria-label="Retour à l'accueil"
        >
          Noël<span className="navbar-logo-dot">.</span>
        </button>

        <nav className="navbar-links" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav-link ${active === link.id ? 'nav-link-active' : ''}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'
            }
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <a
            className="btn btn-primary navbar-cv"
            href={`/${personal.cvFile}`}
            download={personal.cvDownloadName}
          >
            <DownloadIcon size={16} />
            <span>CV</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`mobile-menu-link ${active === link.id ? 'nav-link-active' : ''}`}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            className="btn btn-primary mobile-menu-cv"
            href={`/${personal.cvFile}`}
            download={personal.cvDownloadName}
            onClick={() => setOpen(false)}
          >
            <DownloadIcon size={16} />
            Télécharger mon CV
          </a>
        </nav>
      )}
    </header>
  )
}