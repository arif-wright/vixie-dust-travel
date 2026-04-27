export function AboutPage() {
  return (
    <main className="page-main storybook-subpage">
      <section className="page-hero shell storybook-page-hero">
        <p className="eyebrow">About Vixie Dust</p>
        <h1>Vacation planning with heart, care, and a little pixie dust.</h1>
        <p>
          Vixie Dust Travels was created for families who want memorable vacations without feeling buried under all the
          details that come before the fun begins.
        </p>
      </section>

      <div className="storybook-divider" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section">
        <div className="shell proof-grid storybook-proof-grid">
          <article className="proof-card storybook-panel">
            <p className="eyebrow">Our approach</p>
            <h3>Personal service that begins with your family, your pace, and your vision.</h3>
            <p>
              Every traveler is different. That is why we take time to understand what matters most to you, then help
              shape a trip that feels thoughtful, exciting, and easy to enjoy.
            </p>
          </article>
          <article className="proof-card storybook-panel">
            <p className="eyebrow">The Vixie feeling</p>
            <h3>Guidance, warmth, and support from the first idea to wheels up.</h3>
            <p>
              We want planning to feel less stressful and a lot more magical. From destination ideas to helpful
              recommendations, we are here to make the process feel more manageable every step of the way.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="shell callout-card callout-card--atelier">
          <p className="eyebrow">Why it matters</p>
          <h2>Whimsical on purpose. Helpful where it matters most.</h2>
          <p>
            We believe a travel brand can feel playful and polished at the same time. That means real support, warm
            communication, and a planning experience that still leaves room for wonder.
          </p>
        </div>
      </section>
    </main>
  )
}
