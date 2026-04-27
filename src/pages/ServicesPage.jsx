import { Link } from 'react-router-dom'
import { servicePackages } from '../siteData'

export function ServicesPage() {
  return (
    <main className="page-main storybook-subpage">
      <section className="page-hero shell storybook-page-hero">
        <p className="eyebrow">Services</p>
        <h1>Vacation planning for the kinds of trips families ask for most.</h1>
        <p>
          Whether you are dreaming of Disney, a cruise, or a sunny escape, each planning path is designed to feel
          personal, clear, and easy to say yes to.
        </p>
      </section>

      <div className="storybook-divider" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section">
        <div className="shell card-grid three-up">
          {servicePackages.map((item) => (
            <article key={item.title} className="info-card storybook-panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.includes.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-highlight">
        <div className="shell callout-card callout-card--atelier">
          <p className="eyebrow">Next step</p>
          <h2>Tell us what kind of trip you are dreaming about, and we’ll help shape the details.</h2>
          <p>
            You do not need every detail figured out before you inquire. A destination, a season, or even a rough idea
            is enough to get started.
          </p>
          <Link to="/inquire" className="button-primary">
            Start an inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
