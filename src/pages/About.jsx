import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

const TEAM = [
  { name: 'Rajan Pillai', role: 'Master Craftsman · 28 years', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Ananya Krishnan', role: 'Design Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Venu Gopal', role: 'Head of Finishing', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
]

export default function About() {
  useScrollReveal()
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://plus.unsplash.com/premium_photo-1683134239111-e3a052bc8b93?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Craftsmanship" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Our Story</span>
          <h1>Born from a<br /><em>Love of Wood</em></h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="reveal">
            <span className="section-label">Who We Are</span>
            <h2>Lignora is more than<br /><em>furniture — it is craft.</em></h2>
          </div>
          <div className="about-body reveal" data-delay="150">
            <p>
              Founded in the timber-rich heartlands of Kerala, Lignora was built on a single conviction: that the finest wood, shaped by the finest hands, produces objects that will outlast us all. What began as a small atelier with three craftsmen has grown into a studio of 40+ artisans — each a specialist in their discipline, each committed to the same uncompromising standard.
            </p>
            <p>
              We work exclusively with certified sustainable timber, selected personally from forests and mills we know and trust. Every piece of wood is seasoned for 6 to 18 months before a single joint is cut.
            </p>
            <p>
              The result is furniture that doesn't just look extraordinary — it <em>feels</em> extraordinary. Surfaces you want to touch. Joints that don't creak. Drawers that open like silk. Finishes that deepen in beauty with every passing year.
            </p>
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <div className="gallery-grid">
          {[
            'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800&q=80',
            'https://plus.unsplash.com/premium_photo-1683121332471-bd16fa45be66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
            'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
            'https://plus.unsplash.com/premium_photo-1661940838955-328e043c6d03?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          ].map((src, i) => (
            <div key={i} className={`gallery-item reveal-scale item-${i}`} data-delay={i * 100}>
              <img src={src} alt="Lignora workshop" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="values-inner">
          <div className="reveal">
            <span className="section-label">What We Stand For</span>
            <h2>Three Principles.<br /><em>No Exceptions.</em></h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '𝕀', title: 'Integrity of Material', desc: 'Every wood species we use is sustainably sourced, certified, and selected by eye. No shortcuts, no composites, no compromises.' },
              { icon: '𝕁', title: 'Mastery of Joinery', desc: 'Traditional joinery techniques passed from generation to generation — dovetail, mortise-and-tenon, finger joints — built to last centuries.' },
              { icon: '𝕊', title: 'Slowness as Virtue', desc: 'Good furniture cannot be rushed. We kiln-dry for months. We finish in a dozen coats. We deliver when it is right, not before.' },
            ].map((v, i) => (
              <div key={i} className="value-card reveal" data-delay={i * 120}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="about-team">
        <div className="team-inner">
          <div className="reveal">
            <span className="section-label">The Hands Behind Lignora</span>
            <h2>Meet the<br /><em>Masters</em></h2>
          </div>
          <div className="team-grid">
            {TEAM.map((p, i) => (
              <div key={p.name} className="team-card reveal" data-delay={i * 100}>
                <div className="team-image">
                  <img src={p.img} alt={p.name} />
                </div>
                <h4>{p.name}</h4>
                <span>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="about-cta">
        <div className="reveal">
          <h2>Ready to Commission<br /><em>Something Lasting?</em></h2>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </main>
  )
}
