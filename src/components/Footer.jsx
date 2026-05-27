import { Link } from 'react-router-dom'
import './Footer.css'
 
/* ── Same SVG hex logo used in Navbar ── */
function LignoraIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#c9a96e" strokeWidth="1.5" fill="none"/>
      <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="#c9a96e" opacity="0.85"/>
    </svg>
  )
}
 
export default function Footer() {
  return (
    <footer className="ftr">
 
      {/* ── Top rule with centre logo mark ── */}
      <div className="ftr-rule-wrap">
        <div className="ftr-rule" />
        <div className="ftr-rule-logo">
          <LignoraIcon />
        </div>
        <div className="ftr-rule" />
      </div>
 
      {/* ── CTA band ── */}
      <div className="ftr-cta">
        <div className="ftr-cta-left">
          <span className="ftr-eyebrow">BEGIN YOUR COMMISSION</span>
          <h2 className="ftr-cta-h">
            A piece made<br /><em>only for you.</em>
          </h2>
        </div>
        <div className="ftr-cta-right">
          <p className="ftr-cta-sub">
            Every Lignora piece is conceived, crafted,<br />
            and delivered by the same team of masters<br />
            — from first sketch to final coat.
          </p>
         
        </div>
        {/* <div className="ftr-cta-ghost" aria-hidden="true">LIGNORA</div> */}
      </div>
 
      {/* ── Amber divider ── */}
      <div className="ftr-amber-rule" />
 
      {/* ── Main grid ── */}
      <div className="ftr-grid">
 
        {/* Brand */}
        <div className="ftr-brand">
          <div className="ftr-wordmark">
            <LignoraIcon />
            <span>LIGNORA</span>
          </div>
          <p className="ftr-tagline">
            Crafted in Wood.<br />Defined by Luxury.
          </p>
          <address className="ftr-address">
            Nilambur Road, Malappuram<br />
            Kerala — 679 329, India
          </address>
          <div className="ftr-contact-quick">
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:hello@lignora.com">hello@lignora.com</a>
          </div>
          <div className="ftr-social">
            {[
              {
                label: 'Instagram',
                href: '#',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                  </svg>
                )
              },
              {
                label: 'Pinterest',
                href: '#',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 3.96 2.32 7.38 5.68 9.03-.08-.72-.15-1.83.03-2.62.16-.71 1.1-4.66 1.1-4.66s-.28-.56-.28-1.39c0-1.3.75-2.27 1.69-2.27.8 0 1.18.6 1.18 1.32 0 .8-.51 2.01-.78 3.13-.22.93.46 1.69 1.37 1.69 1.65 0 2.76-2.1 2.76-4.58 0-1.9-1.28-3.22-3.1-3.22-2.12 0-3.36 1.58-3.36 3.22 0 .64.24 1.32.55 1.69.06.07.07.14.05.22-.06.23-.19.77-.22.87-.04.14-.12.17-.27.1-1.01-.47-1.64-1.95-1.64-3.14 0-2.55 1.86-4.9 5.35-4.9 2.81 0 4.99 2 4.99 4.67 0 2.79-1.76 5.03-4.19 5.03-.82 0-1.59-.43-1.85-.93l-.5 1.89c-.18.7-.68 1.57-1.01 2.1.76.24 1.57.36 2.4.36 4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                  </svg>
                )
              },
              {
                label: 'LinkedIn',
                href: '#',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )
              },
              {
                label: 'WhatsApp',
                href: 'https://wa.me/',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.533 5.854L.057 23.448a.5.5 0 00.609.61l5.671-1.485A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.938 9.938 0 01-5.03-1.362l-.36-.214-3.733.978.996-3.648-.234-.374A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                )
              },
            ].map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} className="ftr-social-btn">
                {icon}
              </a>
            ))}
          </div>
        </div>
 
        {/* Nav */}
        <div className="ftr-nav">
          <div className="ftr-col">
            <h5>Navigate</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/craftsmanship">Craftsmanship</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
          <div className="ftr-col">
            <h5>Collections</h5>
            <ul>
              <li><a href="#">Living &amp; Lounge</a></li>
              <li><a href="#">Bedroom</a></li>
              <li><a href="#">Dining</a></li>
              <li><a href="#">Office</a></li>
              <li><a href="#">Bespoke</a></li>
            </ul>
          </div>
          <div className="ftr-col">
            <h5>Reach Us</h5>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="https://wa.me/">WhatsApp</a></li>
              <li><a href="#">Download Catalogue</a></li>
              <li><a href="#">Book a Visit</a></li>
            </ul>
          </div>
        </div>
 
        {/* Awards / credentials strip */}
        <div className="ftr-credentials">
          <div className="ftr-cred-item">
            <strong>28+</strong>
            <span>Years of craft</span>
          </div>
          <div className="ftr-cred-sep" />
          <div className="ftr-cred-item">
            <strong>340+</strong>
            <span>Homes furnished</span>
          </div>
          <div className="ftr-cred-sep" />
          <div className="ftr-cred-item">
            <strong>FSC</strong>
            <span>Certified timber</span>
          </div>
          <div className="ftr-cred-sep" />
          <div className="ftr-cred-item">
            <strong>100%</strong>
            <span>Handcrafted</span>
          </div>
        </div>
 
      </div>
 
      {/* ── Bottom bar ── */}
      <div className="ftr-bottom">
        <p className="ftr-copy">
          © {new Date().getFullYear()} Lignora Woodcraft Pvt. Ltd. All rights reserved.
        </p>
        <p className="ftr-locale">
          <em>Nilambur · Kerala · India</em>
        </p>
        <div className="ftr-legal">
          <a href="#">Privacy</a>
          <span aria-hidden="true">·</span>
          <a href="#">Terms</a>
          <span aria-hidden="true">·</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
 
    </footer>
  )
}
 