import { merchIdeas } from '../siteData'

export function ShopPage() {
  return (
    <main className="page-main storybook-subpage">
      <section className="page-hero shell storybook-page-hero">
        <p className="eyebrow">Shop</p>
        <h1>Little extras that make the journey feel magical before you even leave home.</h1>
        <p>
          The Vixie shop is here for countdowns, park days, travel-day joy, and the families who want the lead-up to
          feel just as fun as the trip itself.
        </p>
      </section>

      <div className="storybook-divider" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section">
        <div className="shell card-grid three-up">
          {merchIdeas.map((item) => (
            <article key={item.title} className="merch-card storybook-panel">
              <span className="pill">{item.price}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell proof-grid storybook-proof-grid">
          <article className="proof-card storybook-panel">
            <p className="eyebrow">Good to know</p>
            <h3>Expect themed bundles, travel-day favorites, and playful little keepsakes.</h3>
            <p>Everything here is meant to support the excitement of the trip, not distract from it.</p>
          </article>
          <article className="proof-card storybook-panel">
            <p className="eyebrow">Coming next</p>
            <h3>As the shop grows, checkout and collections will become easier to browse and shop.</h3>
            <p>
              For now, think of this as a peek into the kinds of extras Vixie Dust Travels will carry for future trips.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
