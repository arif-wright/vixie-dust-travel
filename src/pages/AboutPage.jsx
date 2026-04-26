export function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">About the brand</p>
        <h1>A memorable travel business needs a point of view, not just booking links.</h1>
        <p>
          This page should eventually sell her story, specialties, personality, and trust factors so clients feel like
          they know who they are choosing before they ever submit an inquiry.
        </p>
      </section>

      <section className="section">
        <div className="shell proof-grid">
          <article className="proof-card">
            <p className="eyebrow">What to include</p>
            <h3>Her personal story and why she plans this kind of travel</h3>
            <p>
              The goal is to make her expertise feel specific and human. Families often book the advisor as much as the
              destination.
            </p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">Trust signals</p>
            <h3>Certifications, partner affiliations, reviews, and planning philosophy</h3>
            <p>
              These details reduce hesitation and help justify why someone should use her instead of trying to DIY the
              whole trip.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
