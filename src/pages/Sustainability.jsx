import './Sustainability.css'

export default function Sustainability() {
  return (
    <main className="sustainability-page">

      {/* HERO */}
      <section className="sustainability-hero">

        <div className="hero-left">
          <span className="small-label">
            Conscious Luxury
          </span>

          <h1>
            Nature shapes
            <br />
            everything
            <br />
            we create.
          </h1>
        </div>

        <div className="hero-right">
          <p>
            Sustainability at Lignora is expressed through restraint,
            precision, and timeless craftsmanship — creating interiors
            that feel deeply connected to nature while designed for
            modern living.
          </p>
        </div>

      </section>

      {/* IMAGE SPLIT */}
      <section className="split-section">

        <div className="split-image">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=90&auto=format&fit=crop"
            alt=""
          />
        </div>

        <div className="split-content">

          <span>01</span>

          <h2>
            Responsibly
            <br />
            sourced materials
          </h2>

          <p>
            Every wood selection reflects our commitment to ethical
            sourcing and long-term environmental responsibility.
            We collaborate with suppliers who value regeneration,
            conservation, and sustainable forestry practices.
          </p>

        </div>

      </section>

      {/* DARK STATEMENT */}
      <section className="statement-section">

        <div className="statement-line" />

        <h2>
          True luxury is not excess.
          <br />
          It is <em>longevity.</em>
        </h2>

      </section>

      {/* FEATURE GRID */}
      <section className="feature-grid">

        <div className="feature-card">
          <h3>Minimal Waste</h3>
          <p>
            Precision craftsmanship reduces material waste while
            preserving the integrity of every design.
          </p>
        </div>

        <div className="feature-card large">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=90&auto=format&fit=crop"
            alt=""
          />
        </div>

        <div className="feature-card">
          <h3>Natural Finishes</h3>
          <p>
            We use refined finishes that highlight the authentic
            texture and warmth of natural wood.
          </p>
        </div>

      </section>

      {/* QUOTE */}
      <section className="quote-section">

        <p>
          “We believe sustainability should feel invisible —
          quietly embedded into every detail, texture,
          and material.”
        </p>

      </section>

      {/* FOOTER CTA */}
      <section className="sustainability-footer">

        <h2>
          Crafted slowly.
          <br />
          Designed to endure.
        </h2>

      </section>

    </main>
  )
}