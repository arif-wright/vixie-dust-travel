import { InquiryForm } from '../components/InquiryForm'
import { faqs } from '../siteData'

const inquiryExpectations = [
  'A real person will review your trip details',
  'Recommendations can be shaped around your budget and travel style',
  'You do not need every detail figured out before reaching out',
  'This helps make the next conversation more thoughtful and useful',
]

export function InquiryPage() {
  return (
    <main className="page-main storybook-subpage">
      <section className="page-hero shell storybook-page-hero">
        <p className="eyebrow">Inquire</p>
        <h1>Tell us a little about your dream trip, and we’ll help you take the next step.</h1>
        <p>
          Whether you already know where you want to go or you are still choosing between a few magical ideas, this is
          the easiest place to begin.
        </p>
      </section>

      <div className="storybook-divider" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section">
        <div className="shell inquiry-layout">
          <div className="contact-copy storybook-panel">
            <p className="eyebrow">What happens next</p>
            <h2>A few details now makes the planning feel much easier later.</h2>
            <p>
              Share the basics of what you are picturing, and Vixie Dust Travels can come back with more thoughtful
              ideas, better-fit recommendations, and a clearer next step.
            </p>
            <div className="mini-stats">
              <span>Thoughtful follow-up</span>
              <span>Better-fit ideas</span>
              <span>Less back-and-forth</span>
            </div>
            <ul className="stack-list compact-list">
              {inquiryExpectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <div className="section-head section-head--centered">
            <p className="eyebrow">FAQ</p>
            <h2>Questions you might want answered before you reach out.</h2>
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
