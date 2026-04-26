import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'
import {
  advisorValue,
  brandWelcome,
  merchIdeas,
  planningPillars,
  planningProcess,
  proofPoints,
  revenueStreams,
  specialties,
  trustWithoutTestimonials,
} from '../siteData'

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-star hero-star--one" />
          <span className="hero-star hero-star--two" />
          <span className="hero-orbit hero-orbit--one" />
          <span className="hero-cloud hero-cloud--one" />
        </div>

        <div className="hero-stage shell">
          <div className="hero-copy hero-copy--spotlight">
            <p className="eyebrow">Magical vacations made personal</p>
            <h1 id="hero-title">Dreamy family trips, planned with heart and handled with care.</h1>
            <p className="hero-subtitle">
              Vixie Dust Travels helps families plan Disney vacations, cruises, and sunny getaways with thoughtful
              guidance, clear next steps, and a little extra sparkle along the way.
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
            <p className="hero-kicker">Planning should feel exciting from the first conversation, not overwhelming.</p>
            <div className="hero-inline-points">
              {proofPoints.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="hero-keepsake">
            <div className="hero-keepsake-art" aria-hidden="true">
              <div className="hero-mascot-aura" />
              <img src="/logo-3.png" alt="" className="hero-mascot" />
              <span className="hero-mascot-spark hero-mascot-spark--one">✦</span>
              <span className="hero-mascot-spark hero-mascot-spark--two">✦</span>
            </div>
            <p className="panel-label">Boutique planning</p>
            <p className="hero-keepsake-copy">
              Warm support, thoughtful recommendations, and a planning experience that feels personal from the very
              start.
            </p>
          </aside>
        </div>
      </section>

      <section className="section proof-ribbon">
        <div className="shell proof-ribbon-card">
          <p className="eyebrow">Why families are drawn here</p>
          <div className="proof-ribbon-points">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-signature">
        <div className="shell">
          <div className="signature-head">
            <div className="section-head">
              <p className="eyebrow">Signature vacations</p>
              <h2>Choose the kind of magic that fits your family best.</h2>
              <p>
                Whether you are picturing park days, sail-away sunsets, or warm-weather downtime, we help turn the
                idea into a trip that feels beautifully thought through.
              </p>
            </div>
            <div className="signature-note">
              <p>Every recommendation is shaped around pace, budget, family style, and the memories you want to make.</p>
            </div>
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
        <div className="shell editorial-grid">
          <article className="editorial-card editorial-card--story">
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
          </article>

          <div className="editorial-stack">
            {planningPillars.map((item, index) => (
              <article key={item.title} className="editorial-mini-card">
                <strong>0{index + 1}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="shell">
          <div className="section-head section-head--centered">
            <p className="eyebrow">Why families choose Vixie Dust</p>
            <h2>All the reassurance of expert help, with a warmer and more personal feel.</h2>
            <p>
              Because she is new, the trust strategy here is simple: thoughtful care, clear communication, and a
              planning process that never makes families feel like a number.
            </p>
          </div>

          <div className="trust-grid trust-grid--editorial">
            {trustWithoutTestimonials.map((item) => (
              <article key={item.title} className="info-card trust-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="value-grid value-grid--editorial">
            {revenueStreams.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
            <article className="value-panel">
              <p className="eyebrow">What families often need most</p>
              <ul className="offer-list">
                {advisorValue.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head section-head--centered">
            <p className="eyebrow">How it works</p>
            <h2>A simple path from “we should take a trip” to “we’re actually going.”</h2>
            <p>You do not need a perfect plan before you inquire. You just need the spark of an idea.</p>
          </div>
          <div className="process-river process-river--editorial">
            {planningProcess.map((item) => (
              <article key={item.title} className="process-card">
                <p className="eyebrow">Step</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell split-layout split-layout--shop">
          <div className="shop-story shop-story--editorial">
            <p className="eyebrow">The Vixie shop</p>
            <h2>A playful little extension of the brand, ready for countdowns and park days.</h2>
            <p className="section-copy">
              The shop adds a little extra fun to the journey with travel-inspired keepsakes, trip-ready goodies, and
              playful extras that make the lead-up feel part of the magic.
            </p>
            <Link to="/shop" className="button-secondary">
              Explore the shop
            </Link>
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
          <h2>Your family’s next favorite memory can start with one easy conversation.</h2>
          <p>
            Whether you already know where you want to go or you are still choosing between a few dreamy possibilities,
            Vixie Dust Travels is here to help make the next step feel simple.
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
