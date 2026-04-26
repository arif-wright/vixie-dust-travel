import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'
import { brandWelcome, merchIdeas, planningPillars, proofPoints, revenueStreams, specialties } from '../siteData'

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Magical vacations made simple</p>
            <h1 id="hero-title">
              Helping families plan unforgettable vacations with less stress and more magic.
            </h1>
            <p className="hero-subtitle">
              From Disney vacations and cruises to sunny getaways, Vixie Dust Travels is here to make planning feel
              easier, more personal, and a whole lot more fun.
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
                to="/shop"
                className="button-secondary"
                onClick={() => trackEvent('cta_click', { label: 'View merch route', location: 'home_hero' })}
              >
                Visit the shop
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
            <p className="panel-label">Why families choose us</p>
            <ul className="offer-list">
              <li>Personalized trip recommendations</li>
              <li>Family-friendly planning support</li>
              <li>Guidance from first ideas to final details</li>
              <li>Travel-inspired extras in the Vixie shop</li>
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
            <p className="eyebrow">Our planning style</p>
            <h2>Thoughtful support for every step of the journey</h2>
            <p>We believe vacation planning should feel clear, exciting, and centered around the people traveling.</p>
          </div>
          <div className="card-grid three-up">
            {specialties.map((item) => (
              <article key={`${item.title}-strategy`} className="info-card">
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
    </main>
  )
}
