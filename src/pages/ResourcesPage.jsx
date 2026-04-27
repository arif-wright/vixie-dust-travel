import { contentIdeas, resourceOffers } from '../siteData'

export function ResourcesPage() {
  return (
    <main className="page-main storybook-subpage">
      <section className="page-hero shell storybook-page-hero">
        <p className="eyebrow">Resources</p>
        <h1>Helpful little guides for families who love dreaming ahead.</h1>
        <p>
          This space will grow into a library of planning checklists, destination tips, and travel inspiration for
          families who want a little help before they book.
        </p>
      </section>

      <div className="storybook-divider" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section">
        <div className="shell process-grid">
          <article className="process-card storybook-panel">
            <p className="eyebrow">Freebies</p>
            <h2>Helpful resources families can grab first.</h2>
            <ul className="stack-list">
              {resourceOffers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="process-card storybook-panel">
            <p className="eyebrow">Planning ideas</p>
            <h2>Topics families are already searching for.</h2>
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
