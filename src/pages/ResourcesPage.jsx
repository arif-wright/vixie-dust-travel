import { contentIdeas, resourceOffers } from '../siteData'

export function ResourcesPage() {
  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">Resources</p>
        <h1>Content and freebies are what turn a nice site into a lead machine.</h1>
        <p>
          This area should eventually hold blog content, planning guides, and email capture offers that build
          authority and keep future travelers in orbit until they are ready to book.
        </p>
      </section>

      <section className="section">
        <div className="shell process-grid">
          <article className="process-card">
            <p className="eyebrow">Lead magnets</p>
            <h2>Free offers worth building next</h2>
            <ul className="stack-list">
              {resourceOffers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="process-card">
            <p className="eyebrow">SEO topics</p>
            <h2>Search content that can bring in qualified families</h2>
            <ul className="stack-list">
              {contentIdeas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
