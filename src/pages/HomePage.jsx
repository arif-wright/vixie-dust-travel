import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'
import { merchIdeas, planningPillars, proofPoints, revenueStreams, specialties } from '../siteData'

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Build the business, not just the brochure site</p>
            <h1 id="hero-title">
              A travel brand that books dream trips, sells merch, and turns inquiries into long-term clients.
            </h1>
            <p className="hero-subtitle">
              The strongest version of this site should earn trust, capture qualified leads, and create a second
              revenue stream through curated travel merch.
            </p>
            <div className="hero-actions">
              <Link
                to="/inquire"
                className="button-primary"
                onClick={() => trackEvent('cta_click', { label: 'Start inquiry route', location: 'home_hero' })}
              >
                Start the inquiry funnel
              </Link>
              <Link
                to="/shop"
                className="button-secondary"
                onClick={() => trackEvent('cta_click', { label: 'View merch route', location: 'home_hero' })}
              >
                View merch strategy
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
              <span>Focused enough to market and broad enough to grow.</span>
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
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Service strategy</p>
            <h2>Choose a niche people can immediately understand and trust</h2>
            <p>Specialized messaging converts better, ranks better, and is much easier for clients to recommend.</p>
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

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Revenue engine</p>
            <h2>The business should be designed around repeatable growth loops</h2>
            <p>Bookings lead the business, merch raises lifetime value, and content plus email keeps new people coming in.</p>
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
            <p className="eyebrow">Merch direction</p>
            <h2>Keep the shop curated so it feels like an extension of the trip experience</h2>
            <p className="section-copy">
              The best merch here is identity-driven and trip-tied, not generic. Think countdown bundles, matching gear,
              and items clients are excited to show off.
            </p>
            <Link to="/shop" className="button-secondary">
              Explore the shop structure
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
