import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import './Craftsmanship.css'

const STEPS = [
  { num: '01', title: 'Timber Selection', img: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=700&q=80', desc: 'Every piece begins in the forest. We hand-select timber from certified, sustainable sources — evaluating grain direction, knot frequency, colour depth, and structural integrity. A process that can take weeks for a single commission.' },
  { num: '02', title: 'Drying & Seasoning', img: 'https://plus.unsplash.com/premium_photo-1661903996290-e5685980bb2b?q=80&w=1628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Freshly milled timber is air-dried in our yard for 6–12 months, then kiln-dried to an exact moisture content of 6–8%. This patience prevents future movement, warping, and cracking — the foundation of furniture that lasts.' },
  { num: '03', title: 'Joinery & Structure', img: 'https://images.unsplash.com/photo-1721743144878-55b46815c836?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Our craftsmen use traditional hand-cut joinery exclusively — no pocket screws, no dowels, no biscuit joints. Dovetail, mortise-and-tenon, and finger joints create bonds that grow stronger with time and use.' },
  { num: '04', title: 'Shaping & Detailing', img: 'https://images.unsplash.com/photo-1610123172705-a57f116cd4d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Hand planes, spokeshaves, card scrapers, and chisels — the ancient tools of the cabinetmaker — shape each surface to perfection. No machine can replicate the micro-variations that give hand-worked wood its depth.' },
  { num: '05', title: 'Finishing', img: 'https://plus.unsplash.com/premium_photo-1683140554145-c7fb8c93cb36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: "Finishing is the art within the art. We apply 6\u201312 coats of natural oils, shellacs, waxes, or lacquers \u2014 sanding between each coat. The result is a surface that amplifies the wood's natural beauty rather than hiding it." },
]

export default function Craftsmanship() {
  useScrollReveal()
  return (
    <main className="craft-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://plus.unsplash.com/premium_photo-1664300116801-b45019d03351?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Craftsmanship" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">The Lignora Method</span>
          <h1>The Art Behind<br /><em>Every Piece</em></h1>
        </div>
      </section>

      <section className="craft-intro reveal">
        <div className="craft-intro-inner">
          <span className="section-label">Our Philosophy</span>
          <h2>"A piece of furniture should make you feel something<br /><em>the moment you touch it."</em></h2>
          <p>— Rajan Pillai, Master Craftsman</p>
        </div>
      </section>

      <section className="craft-steps">
        {STEPS.map((step, i) => (
          <div key={step.num} className={`craft-step ${i % 2 === 0 ? 'normal' : 'reversed'}`}>
            <div className="step-image reveal-scale">
              <img src={step.img} alt={step.title} />
            </div>
            <div className={`step-text ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="craft-cta reveal">
        <h2>Experience the Difference<br /><em>for Yourself</em></h2>
        <p>Visit our Kozhikode studio — by appointment — and meet the craftsmen behind Lignora.</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">Book a Studio Visit</Link>
          <Link to="/collections" className="btn-ghost-gold">View Collections</Link>
        </div>
      </section>
    </main>
  )
}
