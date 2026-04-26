import { InquiryForm } from '../components/InquiryForm'
import { faqs, siteMap } from '../siteData'

export function InquiryPage() {
  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">Inquiry funnel</p>
        <h1>Replace email-only outreach with a form that qualifies and organizes every lead.</h1>
        <p>
          This is the bridge from pretty website to real business system. It gives her better information, faster
          follow-up, and cleaner lead handling from day one.
        </p>
      </section>

      <section className="section">
        <div className="shell inquiry-layout">
          <div className="contact-copy">
            <p className="eyebrow">Why this matters</p>
            <h2>A better inquiry page creates better clients.</h2>
            <p>
              Good lead capture reduces back-and-forth, surfaces trip type and budget sooner, and creates a natural
              place to ask about merch interest for future upsells.
            </p>
            <div className="mini-stats">
              <span>Better lead qualification</span>
              <span>Cleaner follow-up</span>
              <span>Merch upsell signal</span>
            </div>
            <ul className="stack-list compact-list">
              {siteMap.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions the inquiry process should answer clearly</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
