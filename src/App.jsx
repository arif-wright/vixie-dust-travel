import { useEffect, useMemo, useRef, useState } from 'react'
import { createLead, exportLeadsToCsv, getLeads } from './lib/crm'
import { trackEvent } from './lib/analytics'

const specialties = [
  {
    title: 'Disney & Theme Park Trips',
    description: 'Position her as the planner who knows park strategy, dining windows, resort tradeoffs, and family pacing.',
    bullets: ['Park-day game plans', 'Resort matching', 'Dining and experience guidance'],
  },
  {
    title: 'Cruises & Group Sailings',
    description: 'Cruises create repeat business, family referrals, and easy opportunities for themed merch bundles.',
    bullets: ['First-timer cruise support', 'Cabin and ship selection', 'Group and reunion coordination'],
  },
  {
    title: 'Sunny Family Escapes',
    description: 'Round out the brand with warm-weather trips that keep revenue flowing beyond one destination niche.',
    bullets: ['All-inclusive matchmaking', 'Budget-conscious options', 'Stress-free family itineraries'],
  },
]

const revenueStreams = [
  {
    title: 'Travel Bookings',
    detail: 'High-trust service pages, a strong inquiry form, social proof, and fast follow-up should be the main conversion engine.',
  },
  {
    title: 'Merch & Bundles',
    detail: 'Keep the catalog curated: park-day tees, cruise countdown kits, luggage tags, and trip-prep bundles tied to bookings.',
  },
  {
    title: 'Audience Growth',
    detail: 'Use destination guides, planning checklists, and email nurture flows to turn visitors into future travelers and repeat buyers.',
  },
]

const siteMap = [
  'Home with clear niche positioning',
  'About page with certifications, specialties, and personal story',
  'Service pages for Disney, cruises, and sunny getaways',
  'Trip inquiry form with qualifying questions',
  'Client stories and testimonials',
  'Blog and free planning resources for SEO',
  'Merch shop with curated collections and bundles',
  'FAQ, policies, and consultation details',
]

const merchIdeas = [
  {
    title: 'Park Day Essentials',
    price: '$28-$64',
    description: 'Matching shirts, autograph books, tote bags, and lanyards for Disney families.',
  },
  {
    title: 'Cruise Countdown Kits',
    price: '$18-$52',
    description: 'Cabin door magnets, sail-away tumblers, packing cubes, and pre-trip countdown merch.',
  },
  {
    title: 'Travel Club Drops',
    price: '$14-$42',
    description: 'Limited seasonal releases for loyal clients and social followers to build community around the brand.',
  },
]

const contentIdeas = [
  'Best Disney resorts for families with toddlers',
  'When to book a cruise for the best cabin options',
  'What to pack for a Caribbean family vacation',
  'The difference between concierge planning and DIY booking',
]

const faqs = [
  {
    question: 'Should the shop compete with the travel side of the site?',
    answer:
      'No. Travel should stay the primary path. The shop should reinforce the brand, increase average customer value, and create repeat engagement.',
  },
  {
    question: 'What makes the biggest difference for growth?',
    answer:
      'Clear specialization, fast lead follow-up, real testimonials, consistent content, and a system for nurturing every inquiry after it comes in.',
  },
  {
    question: 'Do we need a full CRM right away?',
    answer:
      'Not on day one. A lightweight pipeline that captures qualified inquiries, tracks follow-up, and exports clean lead data is enough to start strong.',
  },
]

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  tripType: 'Disney',
  travelWindow: '',
  budget: '',
  partySize: '',
  merchInterest: 'Yes',
  notes: '',
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

function App() {
  const pointerTrailRef = useRef(null)
  const inquiryRef = useRef(null)
  const [form, setForm] = useState(defaultForm)
  const [submitState, setSubmitState] = useState('idle')
  const [leads, setLeads] = useState([])

  useEffect(() => {
    setLeads(getLeads())
  }, [])

  useEffect(() => {
    const layer = pointerTrailRef.current
    if (!layer) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return undefined

    let lastTime = 0
    const minInterval = 30

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span')
      sparkle.className = 'pointer-sparkle'

      const size = 6 + Math.random() * 8
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--sparkle-rotate', `${Math.random() * 70 - 35}deg`)
      sparkle.style.setProperty('--sparkle-drift-x', `${Math.random() * 18 - 9}px`)
      sparkle.style.setProperty('--sparkle-drift-y', `${Math.random() * 16 - 8}px`)
      sparkle.style.animationDuration = `${520 + Math.random() * 340}ms`

      layer.appendChild(sparkle)
      window.setTimeout(() => sparkle.remove(), 980)
    }

    const handleMove = (event) => {
      const now = performance.now()
      if (now - lastTime < minInterval) return
      lastTime = now
      spawnSparkle(event.clientX, event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const crmSummary = useMemo(() => {
    const interestedInMerch = leads.filter((lead) => lead.merchInterest === 'Yes').length
    return {
      total: leads.length,
      newLeads: leads.filter((lead) => lead.stage === 'new').length,
      merchInterested: interestedInMerch,
    }
  }, [leads])

  const handleScrollToInquiry = (label, location) => {
    trackEvent('cta_click', { label, location })
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const lead = createLead({
      ...form,
      stage: 'new',
      source: 'website',
    })

    setLeads((current) => [lead, ...current])
    setForm(defaultForm)
    setSubmitState('success')
    trackEvent('travel_inquiry_submitted', {
      tripType: lead.tripType,
      merchInterest: lead.merchInterest,
    })
  }

  const handleExport = () => {
    exportLeadsToCsv(leads)
    trackEvent('crm_export_clicked', {
      leadCount: leads.length,
    })
  }

  return (
    <div className="site-shell">
      <div ref={pointerTrailRef} className="pointer-sparkle-layer" aria-hidden="true" />

      <header className="topbar">
        <a href="#top" className="brand-lockup">
          <img src="/logo-face.svg" alt="" aria-hidden="true" className="brand-mark" />
          <div>
            <span className="brand-name">Vixie Dust Travel</span>
            <span className="brand-tag">Travel planning + brand merch</span>
          </div>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#shop">Shop</a>
          <a href="#growth">Growth Engine</a>
          <a href="#inquiry">Inquiry</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-content shell">
            <div className="hero-copy">
              <p className="eyebrow">Build the business, not just the brochure site</p>
              <h1 id="hero-title">
                A travel brand that books dream trips, sells merch, and turns inquiries into long-term clients.
              </h1>
              <p className="hero-subtitle">
                The strongest version of this site should do three jobs at once: earn trust, capture qualified leads,
                and create a second revenue stream through curated travel merch.
              </p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="button-primary"
                  onClick={() => handleScrollToInquiry('Plan a Trip', 'hero')}
                >
                  Build the inquiry funnel
                </button>
                <a href="#shop" className="button-secondary" onClick={() => trackEvent('cta_click', { label: 'View merch strategy', location: 'hero' })}>
                  View merch strategy
                </a>
              </div>
              <div className="hero-metrics" aria-label="Recommended business priorities">
                <article>
                  <strong>1</strong>
                  <span>Lead capture should beat email-only outreach</span>
                </article>
                <article>
                  <strong>2</strong>
                  <span>Niche specialization should lead the messaging</span>
                </article>
                <article>
                  <strong>3</strong>
                  <span>Merch should support bookings, not distract from them</span>
                </article>
              </div>
            </div>

            <aside className="hero-panel">
              <p className="panel-label">Recommended core offer stack</p>
              <ul className="offer-list">
                <li>Primary revenue: travel planning and bookings</li>
                <li>Secondary revenue: curated merch and bundles</li>
                <li>Lead magnet: free trip planning guide or checklist</li>
                <li>Nurture engine: email follow-up and review requests</li>
              </ul>
              <div className="hero-note">
                <p>Best first niche</p>
                <strong>Disney + cruises + family travel</strong>
                <span>Clear enough to market, broad enough to grow.</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section soft-band">
          <div className="shell band-grid">
            <div>
              <p className="eyebrow">Success model</p>
              <h2>What will make her career actually grow</h2>
            </div>
            <div className="band-points">
              <span>Clear specialty positioning</span>
              <span>Fast follow-up on every inquiry</span>
              <span>Repeatable content that ranks in search</span>
              <span>Merch that reinforces the travel brand</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Travel services</p>
              <h2>Service pages should make it obvious who she is perfect for</h2>
              <p>
                Visitors should land on a page that mirrors the trip they want, then move directly into a qualified
                inquiry flow.
              </p>
            </div>
            <div className="card-grid three-up">
              {specialties.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="growth">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Growth engine</p>
              <h2>The site should support three revenue and retention loops</h2>
              <p>
                Booking revenue pays the bills, merch strengthens the brand, and content plus email keeps the audience
                coming back.
              </p>
            </div>
            <div className="card-grid three-up">
              {revenueStreams.map((item) => (
                <article key={item.title} className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="shop">
          <div className="shell split-layout">
            <div>
              <p className="eyebrow">Merch strategy</p>
              <h2>Sell a curated shop that feels like part of the travel experience</h2>
              <p className="section-copy">
                Start with a small catalog that naturally fits pre-trip excitement, travel-day prep, and post-booking
                upsells. This should feel like a club, not a generic gift store.
              </p>
              <a href="#inquiry" className="button-secondary" onClick={() => trackEvent('cta_click', { label: 'Discuss merch plan', location: 'shop' })}>
                Tie merch into trip planning
              </a>
            </div>
            <div className="card-grid merch-grid">
              {merchIdeas.map((item) => (
                <article key={item.title} className="merch-card">
                  <span className="pill">{item.price}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-highlight">
          <div className="shell process-grid">
            <article className="process-card">
              <p className="eyebrow">Site map</p>
              <h2>Pages worth building next</h2>
              <ul className="stack-list">
                {siteMap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="process-card">
              <p className="eyebrow">Content engine</p>
              <h2>Topics that bring in qualified traffic</h2>
              <ul className="stack-list">
                {contentIdeas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="shell proof-grid">
            <article className="proof-card">
              <p className="eyebrow">Lead magnet</p>
              <h3>Offer a free planning checklist or destination guide</h3>
              <p>
                This turns casual browsers into email subscribers and gives her a reason to stay in touch before
                someone is ready to book.
              </p>
            </article>
            <article className="proof-card">
              <p className="eyebrow">Referral flywheel</p>
              <h3>Use reviews, return clients, and trip photos as growth assets</h3>
              <p>
                Every finished trip should lead to a testimonial request, a referral ask, and a future merch or trip
                touchpoint.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">FAQ</p>
              <h2>Strategic questions we should answer with the site</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="inquiry" ref={inquiryRef}>
          <div className="shell inquiry-layout">
            <div className="contact-copy">
              <p className="eyebrow">Inquiry funnel</p>
              <h2>Replace the email-only CTA with a form that qualifies and organizes every lead</h2>
              <p>
                This is the first version of a lightweight CRM flow: capture good information, store it cleanly, and
                make follow-up easier than digging through an inbox.
              </p>
              <div className="mini-stats">
                <span>Better lead qualification</span>
                <span>Cleaner follow-up</span>
                <span>Merch upsell signal</span>
              </div>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  Name
                  <input name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={handleChange} />
                </label>
                <label>
                  Trip type
                  <select name="tripType" value={form.tripType} onChange={handleChange}>
                    <option>Disney</option>
                    <option>Cruise</option>
                    <option>Sunny getaway</option>
                    <option>Undecided</option>
                  </select>
                </label>
                <label>
                  Travel window
                  <input name="travelWindow" value={form.travelWindow} onChange={handleChange} placeholder="Spring 2027" />
                </label>
                <label>
                  Budget range
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option>Under $3,000</option>
                    <option>$3,000-$6,000</option>
                    <option>$6,000-$10,000</option>
                    <option>$10,000+</option>
                  </select>
                </label>
                <label>
                  Party size
                  <input name="partySize" value={form.partySize} onChange={handleChange} placeholder="2 adults, 2 kids" />
                </label>
                <label>
                  Interested in merch?
                  <select name="merchInterest" value={form.merchInterest} onChange={handleChange}>
                    <option>Yes</option>
                    <option>Maybe later</option>
                    <option>No</option>
                  </select>
                </label>
              </div>
              <label>
                Notes
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your ideal trip, who is traveling, and what kind of help you want."
                />
              </label>
              <div className="form-actions">
                <button type="submit" className="button-primary">
                  Save inquiry
                </button>
                <a href="mailto:hello@vixiedusttravel.com" className="button-secondary">
                  Keep email as a backup
                </a>
              </div>
              {submitState === 'success' ? (
                <p className="form-success">Inquiry saved locally. Next step: connect this flow to email, Airtable, or Supabase.</p>
              ) : null}
            </form>
          </div>
        </section>

        {import.meta.env.DEV ? (
          <section className="section dev-console">
            <div className="shell">
              <div className="section-head">
                <p className="eyebrow">Dev-only CRM preview</p>
                <h2>Lightweight pipeline prototype</h2>
                <p>This local dashboard is a quick stand-in for the CRM workflow we can wire to a real backend next.</p>
              </div>
              <div className="crm-summary">
                <article>
                  <strong>{crmSummary.total}</strong>
                  <span>Total leads captured</span>
                </article>
                <article>
                  <strong>{crmSummary.newLeads}</strong>
                  <span>Fresh leads awaiting follow-up</span>
                </article>
                <article>
                  <strong>{crmSummary.merchInterested}</strong>
                  <span>Leads open to merch offers</span>
                </article>
              </div>
              <div className="crm-toolbar">
                <p>Use this to prove the intake flow before we connect storage, automation, and admin auth.</p>
                <button type="button" className="button-secondary" onClick={handleExport} disabled={leads.length === 0}>
                  Export CSV
                </button>
              </div>
              <div className="crm-table-wrap">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Trip type</th>
                      <th>Budget</th>
                      <th>Merch</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.length > 0 ? (
                      leads.map((lead) => (
                        <tr key={lead.id}>
                          <td>
                            <strong>{lead.name}</strong>
                            <span>{lead.email}</span>
                          </td>
                          <td>{lead.tripType}</td>
                          <td>{lead.budget || 'Unknown'}</td>
                          <td>{lead.merchInterest}</td>
                          <td>{formatDate(lead.createdAt)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="empty-state">
                          No saved leads yet. Submit the inquiry form to test the pipeline.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}

export default App
