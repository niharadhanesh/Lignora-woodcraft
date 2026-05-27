import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import './Projects.css'

const PROJECTS = [
  { name: 'Private Residence, Bengaluru', type: 'Bespoke Bedroom Suite', year: '2024', img: 'https://images.unsplash.com/photo-1588724324742-4ed370197860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', size: 'large' },
  { name: 'The Leela Palace, New Delhi', type: 'Presidential Suite Furniture', year: '2023', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80', size: 'small' },
  { name: 'Villa Serena, Goa', type: 'Full Interior Commission', year: '2024', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80', size: 'small' },
  { name: 'Kochi Law Chambers', type: 'Executive Office Suite', year: '2023', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80', size: 'small' },
  { name: 'Manor House, Munnar', type: 'Heritage Restoration', year: '2024', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=80', size: 'large' },
  { name: 'Private Club, Mumbai', type: 'Dining Room Commission', year: '2022', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80', size: 'small' },
]

export default function Projects() {
  useScrollReveal()
  return (
    <main className="projects-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://plus.unsplash.com/premium_photo-1661963198655-a671a1f06d25?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Projects" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Selected Work</span>
          <h1>Spaces We've<br /><em>Had the Honour to Shape</em></h1>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`project-item reveal-scale ${p.size}`} data-delay={i * 80}>
              <img src={p.img} alt={p.name} />
              <div className="project-info">
                <span className="project-type">{p.type}</span>
                <h3>{p.name}</h3>
                <span className="project-year">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-cta reveal">
        <h2>Have a space in mind?</h2>
        <Link to="/contact" className="btn-primary">Commission Your Project</Link>
      </section>
    </main>
  )
}
