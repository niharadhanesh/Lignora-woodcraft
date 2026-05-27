import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const COLLECTIONS = [
  {
    id: 1,
    name: 'The Sovereign Series',
    category: 'Living & Lounge',
    desc: 'Commanding presence. Crafted from aged teak with hand-rubbed oil finish.',
    price: 'From ₹1,40,000',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    id: 2,
    name: 'Château Dining Table',
    category: 'Dining',
    desc: "A centrepiece for life's finest moments. Solid walnut, live-edge top.",
    price: 'From ₹2,20,000',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
  },
  {
    id: 3,
    name: 'Heritage Bed Frame',
    category: 'Bedroom',
    desc: 'Where rest becomes ritual. Rosewood with antique brass inlays.',
    price: 'From ₹1,80,000',
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
  },
  {
    id: 4,
    name: "Scholar's Bureau",
    category: 'Office',
    desc: 'Precision-jointed mahogany. The desk of those who lead.',
    price: 'From ₹95,000',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
  },
]


const PROCESS = [
  {
    num: '01',
    title: 'Selection',
    label: 'TIMBER SOURCING',
    desc: 'Every piece begins with choosing the right tree. We source only from certified, sustainable forests — selecting for grain, character, and age.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
  },
  {
    num: '02',
    title: 'Seasoning',
    label: 'DRYING & CURING',
    desc: 'Timber is air-dried and kiln-seasoned for 6–18 months. Patient preparation that prevents warping and ensures lifelong stability.',
    img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=800&q=80',
  },
  {
    num: '03',
    title: 'Joinery',
    label: 'HAND CRAFTSMANSHIP',
    desc: 'Traditional dovetail, mortise-and-tenon, and finger joints — zero glue shortcuts. Every joint is a testament to our masters\' skill.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    num: '04',
    title: 'Finishing',
    label: 'SURFACE TREATMENT',
    desc: 'Hand-rubbed oils, waxes, and lacquers applied in 6–12 coats. Surfaces that deepen in beauty with every passing year.',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
  },
]

const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&q=85',
    alt: 'Luxury wooden living room interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Handcrafted wooden sofa and lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1800&q=85',
    alt: 'Solid walnut dining table',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85',
    alt: 'Bespoke wooden bedroom suite',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Master craftsman woodworking',
  },
]

// 4 slides now
const SHOWCASE_SLIDES = [
  {
    num: '01',
    title: 'Wood Selection',
    desc: 'Each plank begins its journey in certified forests — chosen for grain clarity, density, and the quiet character that only old-growth wood possesses.',
    img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=1200&q=85',
    colImg: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=600&q=80',
  },
  {
    num: '02',
    title: 'Hand Joinery',
    desc: 'Dovetail, mortise-and-tenon, finger joints — executed entirely by hand. No shortcuts. Every connection is a quiet declaration of permanence.',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=85',
    colImg: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
  },
  {
    num: '03',
    title: 'Surface Finishing',
    desc: 'Hand-rubbed oils, waxes, and lacquers applied in 6–12 coats. Surfaces that deepen in beauty with every passing year — never masking, always revealing.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    colImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    num: '04',
    title: 'Final Assembly',
    desc: 'Every component is hand-fitted and inspected before the final piece is assembled. Fit, finish, and function checked by master craftsmen before it leaves our workshop.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    colImg: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
  },
]

function ScrollShowcase() {
  const [active, setActive] = useState(0)
  // prev holds the index of the outgoing slide — shown as the "bottom" layer
  const [prev, setPrev] = useState(null)
  // animKey forces re-mount of the incoming image so the animation retriggers
  const [animKey, setAnimKey] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrolled = -rect.top
      if (scrolled < 0) return
      const segH = section.offsetHeight / SHOWCASE_SLIDES.length
      const idx = Math.min(Math.max(Math.floor(scrolled / segH), 0), SHOWCASE_SLIDES.length - 1)
      setActive(current => {
        if (idx !== current) {
          setPrev(current)          // outgoing becomes the base (bottom) layer
          setAnimKey(k => k + 1)   // new key triggers slide-up animation on incoming
          return idx
        }
        return current
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const slide = SHOWCASE_SLIDES[active]
  const prevSlide = prev !== null ? SHOWCASE_SLIDES[prev] : null

  return (
    <section
      className="hv2-showcase"
      ref={sectionRef}
      style={{ height: `${SHOWCASE_SLIDES.length * 100}vh` }}
    >
      {/* LEFT: sticky image panel */}
      <div className="hv2-showcase-left">
        <div className="hv2-showcase-sticky">
          {/*
            Base layer = the PREVIOUS slide's image.
            It stays visible underneath while the new image slides up over it.
            When there's no previous (first load), it just shows the current.
          */}
          <img
            src={prevSlide ? prevSlide.img : slide.img}
            alt={prevSlide ? prevSlide.title : slide.title}
            className="hv2-sc-base"
          />
          {/*
            Incoming layer = the NEW (active) slide's image.
            Gets a new key every time the slide changes, which re-mounts the element
            and restarts the slide-up CSS animation from the bottom.
          */}
          <img
            key={`incoming-${animKey}`}
            src={slide.img}
            alt={slide.title}
            className="hv2-sc-incoming"
          />
        </div>
      </div>

      {/* RIGHT: sticky content */}
      <div className="hv2-showcase-right">
        <div className="hv2-ss-sticky">
          <div className="hv2-ss-num" key={`n-${active}`}>{slide.num}</div>

          <div className="hv2-ss-title-wrap">
            <h2 className="hv2-ss-title" key={`t-${active}`}>
              <em>{slide.title}</em>
            </h2>
          </div>

          <div className="hv2-ss-frame">
            <span className="hv2-ss-side-label left">OUR</span>
            <div className="hv2-ss-collage">
              <img
                key={`ci-${active}`}
                src={slide.colImg}
                alt=""
                className="hv2-ss-col-single"
              />
            </div>
            <span className="hv2-ss-side-label right">PROCESS</span>
          </div>

          <p className="hv2-ss-desc" key={`desc-${active}`}>{slide.desc}</p>

          <div className="hv2-ss-dots">
            {SHOWCASE_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hv2-ss-dot ${i === active ? 'active' : ''}`}
                onClick={() => {
                  const section = sectionRef.current
                  if (!section) return
                  const segH = section.offsetHeight / SHOWCASE_SLIDES.length
                  window.scrollTo({ top: section.offsetTop + segH * i + 10, behavior: 'smooth' })
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(activeSlide)
      setActiveSlide(i => (i + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlide])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="home-v2">

      {/* ── HERO ── */}
      <section className="hv2-hero">
        <div className="hv2-hero-media">
          {HERO_SLIDES.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={[
                'hv2-slide',
                (i === activeSlide && heroLoaded) ? 'active' : '',
                i === prevSlide ? 'prev' : '',
              ].filter(Boolean).join(' ')}
            />
          ))}
          <div className="hv2-hero-overlay" />
        </div>

        <div className="hv2-hero-center visible">
          <div className="hv2-hero-logo-big">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
              <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="white" strokeWidth="1.5" fill="none"/>
              <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="white" opacity="0.8"/>
            </svg>
            <h1>LIGNORA</h1>
            <p>BESPOKE WOODCRAFT</p>
          </div>
        </div>

        <div className="hv2-floats">
          <a href="https://wa.me/" className="hv2-float hv2-float-wa" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.533 5.854L.057 23.448a.5.5 0 00.609.61l5.671-1.485A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.938 9.938 0 01-5.03-1.362l-.36-.214-3.733.978.996-3.648-.234-.374A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          </a>
          <a href="#catalogue" className="hv2-float hv2-float-dl" aria-label="Download catalogue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
          <a href="mailto:hello@lignora.com" className="hv2-float hv2-float-mail" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
        <div className="hv2-hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hv2-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => { setPrevSlide(activeSlide); setActiveSlide(i) }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="hv2-legacy reveal">
        <div className="hv2-legacy-inner">
          <div className="hv2-legacy-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Lignora wooden living room"
            />
            <div className="hv2-legacy-badge">
              <strong>28+</strong>
              <span>YEARS OF CRAFT</span>
            </div>
          </div>
          <div className="hv2-legacy-text">
            <span className="hv2-label">OUR LEGACY</span>
            <h2>An Unmatched Value Born<br/>From Heritage</h2>
            <p>
              From the teak heartlands of Nilambur — Kerala's crown jewel of timber — Lignora carries
              forward a craft that began with a single workshop and a singular obsession: wood treated
              with mastery becomes a living heirloom.
            </p>
            <p>
              Every piece we make carries the grain and soul of India's finest hardwoods, finished by
              hand and built to outlast generations.
            </p>
            <Link to="/about" className="hv2-link">DISCOVER OUR STORY →</Link>
          </div>
        </div>
      </section>

      {/* ── TWO PANEL FEATURE ── */}
      <section className="hv2-panels">
        <div className="hv2-panel">
          <img src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Master woodworking craftsmanship" />
          <div className="hv2-panel-overlay" />
          <div className="hv2-panel-content">
            <h3>Rooted in tradition,<br/>refined by mastery</h3>
            <p>Every joint, every grain, every finish is the result of decades of devotion. Our craftsmen carry forward techniques passed down through generations — working with hand tools where machines dare not go.</p>
            <div className="hv2-panel-line" />
          </div>
        </div>
        <div className="hv2-panel">
          <img src="https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Natural wood interior beauty" />
          <div className="hv2-panel-overlay" />
          <div className="hv2-panel-content">
            <h3>Natural beauty,<br/>enduring strength</h3>
            <p>Sourced from responsibly managed forests, our hardwoods are chosen for their character — grain patterns that tell a story, natural oils that age with grace, and a density that outlasts centuries.</p>
            <div className="hv2-panel-line" />
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="hv2-collections">
        <div className="hv2-sec-head reveal">
          <span className="hv2-label">OUR COLLECTION</span>
          <h2>Pieces Built to Outlast Generations</h2>
          <Link to="/collections" className="hv2-link">View all →</Link>
        </div>
        <div className="hv2-grid">
          {COLLECTIONS.map((item, i) => (
            <div className="hv2-card reveal" key={item.id} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="hv2-card-img">
                <img src={item.img} alt={item.name} />
                <div className="hv2-card-hover">
                  <Link to="/collections">View Piece →</Link>
                </div>
              </div>
              <div className="hv2-card-body">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <em>{item.price}</em>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCROLL SHOWCASE ── */}
      <ScrollShowcase />

     
      {/* ── PROCESS ── */}
      <section className="hv2-process">
        <div className="hv2-sec-head reveal">
          <span className="hv2-label">HOW WE WORK</span>
          <h2>The Art Behind Every Piece</h2>
        </div>
        <div className="hv2-process-grid">
          {PROCESS.map((step, i) => (
            <div className="hv2-step reveal" key={step.num} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="hv2-step-bg">
                <img src={step.img} alt={step.title} />
                <div className="hv2-step-overlay" />
              </div>
              <div className="hv2-step-content">
                <div className="hv2-step-top">
                  <span className="hv2-step-label">{step.label}</span>
                  <div className="hv2-step-num">{step.num}</div>
                </div>
                <div className="hv2-step-bottom">
                  <div className="hv2-step-line" />
                  <h4>{step.title}</h4>
                  <p className="hv2-step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ORIGIN & QUALITY SECTION ── */}
      <section className="hv2-origin">

        {/* ── PART 1: Full-bleed forest opener ── */}
        <div className="hv2-origin-opener">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=85"
            alt="Nilambur teak forest"
            className="hv2-origin-opener-img"
          />
          <div className="hv2-origin-opener-veil" />
          <div className="hv2-origin-opener-copy reveal">
            <span className="hv2-label" style={{ color: '#c9a96e' }}>WHERE IT BEGINS</span>
            <h2 className="hv2-origin-opener-h">
              Born in the<br />
              <em>heart of the forest.</em>
            </h2>
            <p className="hv2-origin-opener-p">
              Every plank carries the memory of a living tree —
              its rings, its seasons, its silence.
            </p>
          </div>
          {/* floating stat */}
          <div className="hv2-origin-opener-stat reveal">
            <strong>28+</strong>
            <span>Years sourcing<br />certified timber</span>
          </div>
        </div>

        {/* ── PART 2: Split — forest image left, text right ── */}
        <div className="hv2-origin-split">
          <div className="hv2-origin-split-img reveal">
            <img
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=85"
              alt="Sunlight through forest canopy"
            />
            <div className="hv2-origin-split-img-overlay" />
            <div className="hv2-origin-split-img-label">
              <span>Nilambur Forest Reserve</span>
              <span>Kerala, India</span>
            </div>
          </div>
          <div className="hv2-origin-split-text reveal">
            <span className="hv2-label">OUR TIMBER SOURCING</span>
            <h3>
              Only the forests<br />that deserve it.
            </h3>
            <p>
              We source exclusively from Kerala's Nilambur forest reserve —
              India's oldest teak plantation, certified and sustainably managed
              for over a century. Every log is selected by our master craftsmen
              in person: for grain density, heartwood colour, and the quiet
              authority that only old-growth timber possesses.
            </p>
            <p>
              No shortcuts. No compromises. The wood comes first.
            </p>
            <div className="hv2-origin-split-pills">
              <span>FSC Certified</span>
              <span>Old-Growth Teak</span>
              <span>Kerala Sourced</span>
            </div>
          </div>
        </div>

      
      

      </section>



      {/* ── CTA ── */}
      <section className="hv2-cta">
        <div
          className="hv2-cta-bg"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1646890205150-94ea009e4495?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
        />
        <div className="hv2-cta-overlay" />
        <div className="hv2-cta-content reveal">
          <span className="hv2-label" style={{ color: '#c9a96e' }}>BEGIN YOUR JOURNEY</span>
          <h2>Commission a Piece<br/><em>Made for You</em></h2>
          <p>Tell us your vision. Our master craftsmen will bring it to life.</p>
          <Link to="/contact" className="hv2-btn">Request a Bespoke Consultation</Link>
        </div>
      </section>

    </main>
  )
}