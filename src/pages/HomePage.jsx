import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'
import {
  advisorValue,
  brandWelcome,
  merchIdeas,
  newClientPromise,
  planningPillars,
  planningProcess,
  proofPoints,
  revenueStreams,
  specialties,
  trustWithoutTestimonials,
  whimsicalCritters,
} from '../siteData'

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-whimsy" aria-hidden="true">
          {whimsicalCritters.map((item) => (
            <span key={item.label} className={`whimsy-critter ${item.className}`}>
              {item.icon}
            </span>
          ))}
        </div>
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Magical vacations made simple</p>
            <h1 id="hero-title">
              Whimsical, memory-filled vacations planned with heart.
            </h1>
            <p className="hero-subtitle">
              From Disney dreams and family cruises to sunny escapes, Vixie Dust Travels helps turn “we should plan a
              trip” into “we cannot wait to go.”
            </p>
            <div className="hero-actions">
              <Link
                to="/inquire"
                className="button-primary"
                onClick={() => trackEvent('cta_click', { label: 'Start inquiry route', location: 'home_hero' })}
              >
                Start planning
              </Link>
              <Link
                to="/services"
                className="button-secondary"
                onClick={() => trackEvent('cta_click', { label: 'View trip types', location: 'home_hero' })}
              >
                Explore trip types
              </Link>
            </div>
            <div className="hero-metrics">
              {planningPillars.map((item, index) => (
                <article key={item.title}>
                  <strong>0{index + 1}</strong>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-label">New client promise</p>
            <ul className="offer-list">
              {newClientPromise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-note">
              <p>Specialties</p>
              <strong>Disney, cruises, and sunny family getaways</strong>
              <span>Trips designed with care, wonder, and unforgettable memories in mind.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section soft-band">
        <div className="shell band-grid">
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2>Vacation planning that feels thoughtful, joyful, and personal</h2>
          </div>
          <div className="band-points">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell welcome-feature">
          <div className="mascot-stage" aria-hidden="true">
            <div className="mascot-aura" />
            <img src="/logo-3.png" alt="" className="welcome-mascot" />
            <span className="mascot-spark mascot-spark--one">✦</span>
            <span className="mascot-spark mascot-spark--two">✦</span>
          </div>
          <div className="welcome-story">
            <p className="eyebrow">Welcome</p>
            <h2>{brandWelcome.title}</h2>
            <p className="welcome-lead">{brandWelcome.lead}</p>
            <p>{brandWelcome.body}</p>
            <div className="hero-actions">
              <Link to="/about" className="button-secondary">
                Meet Vixie Dust Travels
              </Link>
              <Link to="/inquire" className="button-primary">
                Plan your trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-signature">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Signature vacations</p>
            <h2>Explore the kinds of vacations we love planning most</h2>
            <p>
              Whether you are dreaming of castle views, ocean breezes, or sunshine and sand, we help match your family
              with a vacation that feels just right.
            </p>
          </div>
          <div className="signature-grid">
            {specialties.map((item) => (
              <article key={item.title} className="signature-card">
                <div className={`signature-card-top signature-card-top--${item.visual}`} aria-hidden="true">
                  <div className={`signature-icon signature-icon--${item.visual}`} />
                </div>
                <div className="signature-cloud-row" aria-hidden="true">
                  <img src="/cloud-divider.png" alt="" className="signature-cloud-image" />
                </div>
                <div className="signature-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link to="/services" className="button-primary button-card">
                    Explore this trip type
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Why work with a travel advisor</p>
            <h2>You bring the dream. We help shape the details.</h2>
            <p>
              Planning support is not about taking the fun out of travel. It is about making the decisions easier and
              the experience feel more exciting from the start.
            </p>
          </div>
          <div className="card-grid three-up">
            {trustWithoutTestimonials.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>A planning process that feels easy to follow and fun to be part of</h2>
            <p>You do not need to have every detail figured out before reaching out. We can help from the very beginning.</p>
          </div>
          <div className="process-grid">
            {planningProcess.map((item) => (
              <article key={item.title} className="process-card">
                <p className="eyebrow">{item.title}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Why Vixie Dust</p>
            <h2>A little more support, a little more sparkle, and a lot more peace of mind</h2>
            <p>We are here to help take the stress out of planning so you can focus on what matters most: the memories you are about to make.</p>
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

      <section className="section">
        <div className="shell split-layout">
          <div>
            <p className="eyebrow">The Vixie shop</p>
            <h2>Travel-inspired extras to make the journey even more fun</h2>
            <p className="section-copy">
              From matching travel goodies to countdown-worthy gifts, our shop is designed to bring a little extra joy
              to the adventures ahead.
            </p>
            <Link to="/shop" className="button-secondary">
              Explore the shop
            </Link>
            <ul className="offer-list offer-list--compact">
              {advisorValue.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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

      <section className="section">
        <div className="shell callout-card callout-card--finale">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let’s plan something magical together.</h2>
          <p>
            Whether you already know exactly where you want to go or you are still deciding between a few dreamy ideas,
            Vixie Dust Travels is here to help you take the next step.
          </p>
          <div className="hero-actions">
            <Link to="/inquire" className="button-primary">
              Start your inquiry
            </Link>
            <Link to="/services" className="button-secondary">
              See our services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
