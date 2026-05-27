import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Story', to: '/about' },
  { label: 'Collections', to: '/collections' },
  { label: 'Craftsmanship', to: '/craftsmanship' },
  { label: 'Projects', to: '/projects' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'hidden' : ''}`}>
        <Link to="/" className="navbar-logo">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="currentColor" strokeWidth="2" fill="none"/>
            <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="currentColor" opacity="0.7"/>
          </svg>
          <span>LIGNORA</span>
        </Link>

        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span />
        </button>
      </nav>

      {/* ── FULLSCREEN MENU MODAL ── */}
      <div className={`nav-modal ${menuOpen ? 'open' : ''}`}>
        {/* Blurred bg image */}
        <div className="nav-modal-bg" />

        {/* Top bar inside modal */}
        <div className="nav-modal-top">
          <Link to="/" className="nav-modal-logo" onClick={() => setMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="white" strokeWidth="2" fill="none"/>
              <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="white" opacity="0.7"/>
            </svg>
            <span>LIGNORA</span>
            <small>BESPOKE WOODCRAFT</small>
          </Link>
          <button className="nav-modal-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Nav links — right side */}
        <div className="nav-modal-links">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-modal-item ${location.pathname === link.to ? 'active' : ''}`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="nav-modal-bottom">
          <div className="nav-modal-meet">
            <span className="nav-modal-bl">LET'S MEET</span>
            <p>Woodcraft Lane, Calicut – Nilambur Rd</p>
            <p>Kozhikode, Kerala 673001</p>
          </div>
          <div className="nav-modal-talk">
            <span className="nav-modal-bl">LET'S TALK</span>
            <p>+91 98765 43210</p>
            <a href="mailto:hello@lignora.com">hello@lignora.com</a>
          </div>
          <div className="nav-modal-connect">
            <span className="nav-modal-bl">CONNECT</span>
            <div className="nav-modal-socials">
              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a href="#" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div className="nav-modal-tagline">
          <span>Let's build something <strong>great together</strong></span>
          <span>hello@lignora.com</span>
        </div>
      </div>
    </>
  )
}