import { merchIdeas } from '../siteData'

export function ShopPage() {
  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">Shop</p>
        <h1>The shop should feel like joining the world of the brand, not browsing a random catalog.</h1>
        <p>
          Start small, themed, and niche-aligned. The best first merch supports the excitement around booking and
          traveling rather than competing with it.
        </p>
      </section>

      <section className="section">
        <div className="shell card-grid three-up">
          {merchIdeas.map((item) => (
            <article key={item.title} className="merch-card">
              <span className="pill">{item.price}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell proof-grid">
          <article className="proof-card">
            <p className="eyebrow">Smart first move</p>
            <h3>Use curated bundles instead of a huge product list</h3>
            <p>Bundles are easier to market, easier to photograph, and easier to tie back to specific trip types.</p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">Operational advice</p>
            <h3>Use Shopify for checkout when we wire this into production</h3>
            <p>
              It will save time on inventory, payments, order emails, and taxes compared with trying to build commerce
              from scratch inside this app.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
