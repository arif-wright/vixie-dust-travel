import { Link } from 'react-router-dom'
import { servicePackages } from '../siteData'

export function ServicesPage() {
  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">Services</p>
        <h1>Each service page should answer “is she the right planner for my exact kind of trip?”</h1>
        <p>
          That clarity is one of the biggest levers for better lead quality. These offers are framed to help the client
          recognize themselves immediately.
        </p>
      </section>

      <section className="section">
        <div className="shell card-grid three-up">
          {servicePackages.map((item) => (
            <article key={item.title} className="info-card">
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
        <div className="shell callout-card">
          <p className="eyebrow">Conversion path</p>
          <h2>Every service page should end with a direct, low-friction next step.</h2>
          <p>
            Explain who the offer is for, what support looks like, and how quickly she responds once the inquiry comes
            in. People convert faster when they can picture the first interaction.
          </p>
          <Link to="/inquire" className="button-primary">
            Start an inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
