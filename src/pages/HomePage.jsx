import { Link } from 'react-router-dom'
import { trackEvent } from '../lib/analytics'
import { brandWelcome, planningPillars, specialties } from '../siteData'

export function HomePage() {
  return (
    <main className="home-storybook">
      <section className="storybook-hero" aria-labelledby="hero-title">
        <div className="storybook-sparkle storybook-sparkle--one" aria-hidden="true" />
        <div className="storybook-sparkle storybook-sparkle--two" aria-hidden="true" />
        <div className="storybook-sparkle storybook-sparkle--three" aria-hidden="true" />

        <div className="container storybook-hero-content">
          <p className="storybook-overline">Vixie Dust Travels</p>
          <h1 id="hero-title">Sprinkling magic on every journey.</h1>
          <p className="storybook-hero-copy">
            Making Disney vacations, magical cruises, and sunny family getaways feel easier, sweeter, and full of
            wonder from the very beginning.
          </p>
          <div className="storybook-actions">
            <Link
              to="/inquire"
              className="storybook-btn"
              onClick={() => trackEvent('cta_click', { label: 'Start magical journey', location: 'home_hero' })}
            >
              Start Your Magical Journey
            </Link>
            <Link
              to="/services"
              className="storybook-btn storybook-btn--ghost"
              onClick={() => trackEvent('cta_click', { label: 'View services', location: 'home_hero' })}
            >
              Explore Trip Types
            </Link>
          </div>
        </div>
      </section>

      <div className="storybook-cloud-divider" aria-hidden="true" />

      <section className="storybook-about container">
        <div className="storybook-about-visual">
          <div className="storybook-logo-frame">
            <img src="/logo-3.png" alt="Vixie Dust Travels fox logo" />
          </div>
        </div>
        <div className="storybook-about-copy">
          <p className="storybook-section-label">Welcome</p>
          <h2>{brandWelcome.title}</h2>
          <p className="storybook-lead">{brandWelcome.lead}</p>
          <p>{brandWelcome.body}</p>
          <div className="storybook-mini-points">
            {planningPillars.map((item) => (
              <span key={item.title}>{item.title}</span>
            ))}
          </div>
          <Link to="/about" className="storybook-btn">
            Learn More
          </Link>
        </div>
      </section>

      <section className="storybook-services">
        <div className="container">
          <p className="storybook-section-label storybook-section-label--centered">Our Services</p>
          <h2 className="storybook-centered-heading">Thoughtfully planned trips with a touch of pixie dust.</h2>
          <div className="storybook-service-cards">
            {specialties.map((item) => (
              <article key={item.title} className="storybook-card">
                <div className={`storybook-card-icon storybook-card-icon--${item.visual}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/services" className="storybook-inline-link">
                  Explore this trip
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="storybook-promise container">
        <div className="storybook-promise-panel">
          <p className="storybook-section-label">Why Families Choose Vixie Dust</p>
          <h2>Personal guidance, joyful planning, and support that feels truly one-on-one.</h2>
          <p>
            Whether you are dreaming about a castle, a ship, or a beach chair in the sun, Vixie Dust Travels helps
            turn the planning process into part of the magic instead of part of the stress.
          </p>
        </div>
      </section>

      <section className="storybook-cta">
        <div className="container storybook-cta-inner">
          <p className="storybook-section-label storybook-section-label--centered">Ready to Plan Something Magical?</p>
          <h2 className="storybook-centered-heading">Let’s make your next vacation feel unforgettable.</h2>
          <Link to="/inquire" className="storybook-btn">
            Let&apos;s Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
