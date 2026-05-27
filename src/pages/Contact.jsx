import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80" alt="Contact" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Get in Touch</span>
          <h1>Let's Build<br /><em>Something Together</em></h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-info reveal-left">
            <span className="section-label">Reach Us</span>
            <h2>We'd Love to<br /><em>Hear from You</em></h2>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Studio</span>
                <p>Lignora Woodcraft Studio<br />MG Road, Kozhikode<br />Kerala 673001, India</p>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Talk to Us</span>
                <p>
                  <a href="tel:+919876543210">+91 98765 43210</a><br />
                  <a href="mailto:hello@lignora.com">hello@lignora.com</a>
                </p>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Hours</span>
                <p>Mon – Sat: 9am – 7pm IST<br />Sunday: By appointment</p>
              </div>
              <div className="contact-detail">
                <span className="detail-label">WhatsApp</span>
                <a
                  href="https://wa.me/919876543210"
                  className="whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us now →
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal-right">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✦</div>
                <h3>Thank you, {form.name}.</h3>
                <p>We'll be in touch within 24 hours to discuss your requirements.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request a Consultation</h3>
                <p className="form-sub">Complete the form and our team will reach out within 24 hours.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>I'm interested in</label>
                    <select name="interest" value={form.interest} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Living & Lounge</option>
                      <option>Dining</option>
                      <option>Bedroom</option>
                      <option>Office</option>
                      <option>Bespoke Commission</option>
                      <option>Full Interior Project</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Tell us about your project</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your space, requirements, or inspiration..."
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
