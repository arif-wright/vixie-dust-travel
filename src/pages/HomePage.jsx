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
} from '../siteData'

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-star hero-star--one" />
          <span className="hero-star hero-star--two" />
          <span className="hero-star hero-star--three" />
          <span className="hero-orbit hero-orbit--one" />
          <span className="hero-orbit hero-orbit--two" />
          <span className="hero-cloud hero-cloud--one" />
          <span className="hero-cloud hero-cloud--two" />
        </div>
        <div className="hero-content shell">
          <div className="hero-copy">
            <p className="eyebrow">Magical vacations made personal</p>
            <h1 id="hero-title">
              Family trips that feel dreamy before you even leave home.
            </h1>
            <p className="hero-subtitle">
              Vixie Dust Travels helps families plan Disney vacations, cruises, and sunny getaways with more wonder,
              less stress, and thoughtful guidance every step of the way.
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

          <aside className="hero-story-card">
            <div className="hero-story-top">
              <div className="hero-mascot-scene" aria-hidden="true">
                <div className="hero-mascot-aura" />
                <img src="/logo-3.png" alt="" className="hero-mascot" />
                <span className="hero-mascot-spark hero-mascot-spark--one">✦</span>
                <span className="hero-mascot-spark hero-mascot-spark--two">✦</span>
              </div>
              <div className="hero-story-copy">
                <p className="panel-label">A boutique planning experience</p>
                <h2>Pretty details. Clear guidance. Real excitement.</h2>
                <p>
                  This is travel planning designed to feel warm, collaborative, and a little bit enchanting from the
                  very first conversation.
                </p>
              </div>
            </div>
            <div className="hero-story-note">
              <p className="panel-label">New client promise</p>
              <ul className="offer-list">
                {newClientPromise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section soft-band">
        <div className="shell band-grid">
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2>Storybook charm meets beautifully organized planning</h2>
          </div>
          <div className="band-points">
            {proofPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <article className="story-card story-card--welcome">
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

          <article className="story-card story-card--promise">
            <p className="eyebrow">A little Vixie magic</p>
            <h2>We help the whole trip feel lighter, sweeter, and more exciting.</h2>
            <div className="stacked-promise-list">
              {planningPillars.map((item, index) => (
                <div key={item.title} className="promise-row">
                  <strong>0{index + 1}</strong>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section-signature">
        <div className="shell">
          <div className="signature-head">
            <div className="section-head">
              <p className="eyebrow">Signature vacations</p>
              <h2>Three dreamy ways to travel, each with its own kind of magic</h2>
              <p>
                Whether your family lights up for castle views, ocean breezes, or sunny resort days, we help turn that
                first spark of excitement into a plan that actually feels doable.
              </p>
            </div>
            <div className="signature-note">
              <p>
                We are not here to push one-size-fits-all trips. We are here to help you find the vacation that feels
                most like you.
              </p>
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
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Trust, reimagined</p>
            <h2>New advisor does not mean less care. It means your trip gets real attention.</h2>
            <p>
              Because this business is growing, every client matters deeply. The experience should feel hands-on,
              supportive, and thoughtfully built around your family from the very beginning.
            </p>
          </div>
          <div className="trust-grid">
            {trustWithoutTestimonials.map((item) => (
              <article key={item.title} className="info-card trust-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
            <article className="callout-card trust-callout">
              <p className="eyebrow">The real promise</p>
              <h2>No pressure, no guessing, no feeling lost in the process.</h2>
              <p>
                If you have ever stared at too many resort choices, cruise options, or planning tips and thought
                “where do I even start?” this is exactly where Vixie Dust Travels can step in.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">How the magic happens</p>
            <h2>A planning process that feels calm, clear, and surprisingly fun</h2>
            <p>You do not need to show up with a perfect plan. You just need a dream, a season, or even a maybe.</p>
          </div>
          <div className="process-river">
            {planningProcess.map((item) => (
              <article key={item.title} className="process-card">
                <p className="eyebrow">Step</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
            <article className="process-story-card">
              <p className="eyebrow">Designed for real life</p>
              <h2>Busy families deserve planning help that feels lovely, not overwhelming.</h2>
              <p>
                We keep things organized and easy to follow so the pre-trip season can feel like part of the fun, not
                another thing on your plate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Why Vixie Dust</p>
            <h2>Support that feels polished enough to trust and playful enough to remember</h2>
            <p>
              The Vixie Dust difference is not just what gets booked. It is how the whole planning experience feels
              while you are getting there.
            </p>
          </div>
          <div className="value-grid">
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
        <div className="shell split-layout split-layout--shop">
          <div className="shop-story">
            <p className="eyebrow">The Vixie shop</p>
            <h2>Travel-inspired extras to make the journey even more fun</h2>
            <p className="section-copy">
              The shop is meant to feel like an extension of the magic, with playful travel goodies, countdown treats,
              and keepsakes that make the trip feel special even before departure day.
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
          <h2>Your family’s next favorite memory could start right here.</h2>
          <p>
            Whether you are already picturing castle fireworks, a sunset sail-away, or sandy little footprints by the
            water, Vixie Dust Travels is here to help make the trip feel real.
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
