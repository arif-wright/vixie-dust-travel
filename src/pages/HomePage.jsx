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
    <main className="home-editorial">
      <section className="hero hero--atelier" aria-labelledby="hero-title">
        <div className="hero-backdrop hero-backdrop--atelier" aria-hidden="true" />
        <div className="hero-dust hero-dust--one" aria-hidden="true" />
        <div className="hero-dust hero-dust--two" aria-hidden="true" />

        <div className="shell hero-shell">
          <div className="hero-frame">
            <div className="hero-canvas">
              <div className="hero-canvas-copy">
                <p className="eyebrow">Vixie Dust Travel</p>
                <h1 id="hero-title">A more magical way to plan the family trip everyone will remember.</h1>
                <p className="hero-subtitle hero-subtitle--atelier">
                  Disney vacations, cruises, and sun-soaked getaways designed with thoughtful guidance, beautiful
                  details, and a calmer path from first idea to booked adventure.
                </p>
              </div>

              <div className="hero-crest" aria-hidden="true">
                <img src="/logo-3.png" alt="" className="hero-crest-fox" />
              </div>

              <div className="hero-caption">
                <span>Storybook planning for dreamy family escapes</span>
              </div>
            </div>

            <div className="hero-manifesto">
              <div className="hero-manifesto-copy">
                <p className="eyebrow">Boutique planning experience</p>
                <h2>Graceful guidance, warm support, and just enough pixie dust.</h2>
                <p>
                  Vixie Dust Travels helps families feel looked after, inspired, and genuinely excited while the trip
                  comes together.
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
              </div>

              <div className="hero-manifesto-points">
                {proofPoints.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section chapter-intro">
        <div className="shell chapter-intro-shell">
          <div className="chapter-copy">
            <p className="eyebrow">Welcome</p>
            <h2>{brandWelcome.title}</h2>
            <p className="welcome-lead">{brandWelcome.lead}</p>
            <p>{brandWelcome.body}</p>
          </div>
          <div className="chapter-ornament" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section section-signature section-signature--atelier">
        <div className="shell">
          <div className="signature-head signature-head--atelier">
            <div className="section-head">
              <p className="eyebrow">Signature vacations</p>
              <h2>Choose the kind of magic that suits your season.</h2>
              <p>
                From castle-day wonder to ocean breezes to warm-weather ease, each vacation type is planned with a
                softer, more personal touch.
              </p>
            </div>
            <div className="signature-note signature-note--atelier">
              <p>Not one-size-fits-all. Not rushed. Just thoughtful recommendations shaped around your family.</p>
            </div>
          </div>

          <div className="signature-grid signature-grid--atelier">
            {specialties.map((item) => (
              <article key={item.title} className="signature-card signature-card--atelier">
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
                  <Link to="/services" className="button-secondary button-card">
                    Explore this trip type
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial-panel-section">
        <div className="shell editorial-panel-grid">
          <article className="editorial-panel editorial-panel--ivory">
            <p className="eyebrow">What it feels like</p>
            <h2>Planning that feels lighter, sweeter, and much less overwhelming.</h2>
            <div className="editorial-pillars">
              {planningPillars.map((item, index) => (
                <article key={item.title} className="editorial-pillar">
                  <strong>0{index + 1}</strong>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="editorial-panel editorial-panel--mist">
            <p className="eyebrow">Why families choose Vixie Dust</p>
            <h2>A fresh advisor can still deliver an incredibly thoughtful experience.</h2>
            <div className="trust-grid trust-grid--atelier">
              {trustWithoutTestimonials.map((item) => (
                <article key={item.title} className="info-card trust-card trust-card--atelier">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section story-spread">
        <div className="shell story-spread-shell">
          <div className="story-spread-visual" aria-hidden="true">
            <div className="story-visual-frame story-visual-frame--tall">
              <img src="/hero-2.png" alt="" />
            </div>
            <div className="story-visual-frame story-visual-frame--small">
              <img src="/card-bg.png" alt="" />
            </div>
          </div>

          <div className="story-spread-copy">
            <p className="eyebrow">How it works</p>
            <h2>A clear little path from wishful thinking to real plans.</h2>
            <div className="process-river process-river--atelier">
              {planningProcess.map((item) => (
                <article key={item.title} className="process-card process-card--atelier">
                  <p className="eyebrow">Step</p>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contrast section-contrast--atelier">
        <div className="shell atelier-value-shell">
          <div className="section-head section-head--centered">
            <p className="eyebrow">What support looks like</p>
            <h2>Practical help, elegant presentation, and room for real excitement.</h2>
          </div>

          <div className="value-grid value-grid--atelier">
            {revenueStreams.map((item) => (
              <article key={item.title} className="feature-card feature-card--atelier">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
            <article className="value-panel value-panel--atelier">
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

      <section className="section atelier-shop">
        <div className="shell atelier-shop-shell">
          <div className="shop-story shop-story--atelier">
            <p className="eyebrow">The Vixie shop</p>
            <h2>Playful little keepsakes for countdowns, park days, and memory making.</h2>
            <p className="section-copy">
              The shop should feel like part of the world: a soft extra layer of fun for families who want the journey
              to feel magical before they ever pack a bag.
            </p>
            <Link to="/shop" className="button-secondary">
              Explore the shop
            </Link>
          </div>
          <div className="card-grid merch-grid merch-grid--atelier">
            {merchIdeas.map((item) => (
              <article key={item.title} className="merch-card merch-card--atelier">
                <span className="pill">{item.price}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell callout-card callout-card--finale callout-card--atelier">
          <p className="eyebrow">Ready when you are</p>
          <h2>Your family’s next favorite memory can begin with one lovely little conversation.</h2>
          <p>
            Whether you already know where you want to go or you are still narrowing it down, Vixie Dust Travels is
            here to make the next step feel calm, beautiful, and easy to begin.
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
