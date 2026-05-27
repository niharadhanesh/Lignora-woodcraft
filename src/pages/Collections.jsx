import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Collections.css'

const CATEGORIES = ['All', 'Living & Lounge', 'Dining', 'Bedroom', 'Office', 'Bespoke']

const PRODUCTS = [
  { id: 1, name: 'The Sovereign Sofa', cat: 'Living & Lounge', wood: 'Aged Teak', finish: 'Hand-rubbed Oil', price: '₹1,40,000', img: 'https://plus.unsplash.com/premium_photo-1661964056906-ed236b15df1b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Château Dining Table', cat: 'Dining', wood: 'Solid Walnut', finish: 'Live-edge Natural', price: '₹2,20,000', img: 'https://plus.unsplash.com/premium_photo-1661962943980-f5296449770c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Heritage Bed Frame', cat: 'Bedroom', wood: 'Rosewood', finish: 'Brass Inlay', price: '₹1,80,000', img: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: "Scholar's Bureau", cat: 'Office', wood: 'Mahogany', finish: 'Polished', price: '₹95,000', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=700&q=80' },
  { id: 5, name: 'Nocturne Armchair', cat: 'Living & Lounge', wood: 'Sheesham', finish: 'Dark Wax', price: '₹78,000', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=80' },
  { id: 6, name: 'Harvest Sideboard', cat: 'Dining', wood: 'Mango Wood', finish: 'Natural Oil', price: '₹1,10,000', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=700&q=80' },
  { id: 7, name: 'Slumber Wardrobe', cat: 'Bedroom', wood: 'Burma Teak', finish: 'Matte Lacquer', price: '₹2,40,000', img: 'https://plus.unsplash.com/premium_photo-1675744019084-8212b52582f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, name: 'Atelier Desk Set', cat: 'Office', wood: 'Walnut', finish: 'Satin Polish', price: '₹1,30,000', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80' },
  { id: 9, name: 'Grand Commission', cat: 'Bespoke', wood: 'Your Choice', finish: 'Bespoke', price: 'On Request', img: 'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

export default function Collections() {
  useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active)

  return (
    <main className="collections-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" alt="Collections" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Lignora Collections</span>
          <h1>Pieces That<br /><em>Endure</em></h1>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-inner">
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
                data-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="products-grid">
          {filtered.map((p, i) => (
            <div key={p.id} className="product-card reveal" data-delay={i * 80}>
              <div className="product-image">
                <img src={p.img} alt={p.name} />
                <div className="product-overlay">
                  <Link to="/contact" className="product-btn">Enquire →</Link>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta">
                  <span>{p.wood}</span>
                  <span>{p.finish}</span>
                </div>
                <h3>{p.name}</h3>
                <span className="product-price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bespoke-banner reveal">
        <div className="bespoke-inner">
          <span className="section-label">Can't find what you want?</span>
          <h2>Commission a Truly<br /><em>Bespoke Piece</em></h2>
          <p>Every Lignora piece can be made exactly to your specification — dimensions, wood species, finish, and detail.</p>
          <Link to="/contact" className="btn-primary">Start a Bespoke Commission</Link>
        </div>
      </section>
    </main>
  )
}
