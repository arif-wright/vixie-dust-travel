import { Link } from 'react-router-dom'

const serviceCards = [
  {
    title: 'Disney Vacations',
    description:
      'From first-time visits to annual traditions, every Disney trip is tailored to your family, your pace, and the kind of magic you want to experience.',
    bullets: ['Walt Disney World planning', 'Disneyland Resort guidance', 'Resort, ticket, and dining support', 'Adventure-ready family pacing'],
    image: '/disney.png',
  },
  {
    title: 'Magical Cruises',
    description:
      'Set sail for adventure and relaxation with a cruise that fits your style, your priorities, and your budget.',
    bullets: ['Cruise line recommendations', 'Itinerary and port matching', 'Cabin selection guidance', 'Group and family booking support'],
    image: '/cruise.png',
  },
  {
    title: 'Sunny Getaways',
    description:
      'Relax, recharge, and soak up the sunshine with beach vacations, all-inclusives, and warm-weather escapes designed for families.',
    bullets: ['All-inclusive resort ideas', 'Caribbean and Mexico escapes', 'Warm-weather family favorites', 'Custom itinerary guidance'],
    image: '/getaway.png',
  },
  {
    title: 'Custom Itineraries',
    description:
      'Some trips need more than a basic booking. We can help shape a day-by-day plan that feels smooth, personal, and easy to enjoy.',
    bullets: ['Multi-destination trip ideas', 'Special occasion travel', 'Anniversary and milestone escapes', 'Bucket-list planning support'],
    icon: 'globe',
  },
  {
    title: 'Planning Support',
    description:
      'Already have part of the trip started? We can step in to help organize the details and make the rest of the process feel lighter.',
    bullets: ['Dining and activity guidance', 'Park ticket and pass support', 'Travel-day planning help', 'Itinerary review and polish'],
    icon: 'clipboard',
  },
  {
    title: 'Travel Protection',
    description:
      'Peace of mind matters. We can help you look at the protection options that make sense for your trip and your comfort level.',
    bullets: ['Travel insurance options', 'Trip protection guidance', 'Coverage comparison help', 'Support-oriented planning mindset'],
    icon: 'suitcase',
  },
]

const processSteps = [
  {
    title: "Let's Chat",
    copy: 'We start with your dream trip, your travel style, and the details that matter most to your family.',
    icon: 'heart',
  },
  {
    title: 'I Plan The Magic',
    copy: 'I create a custom plan with the best-fit options, thoughtful recommendations, and clear next steps.',
    icon: 'wand',
  },
  {
    title: 'You Review & Approve',
    copy: 'Together, we go over the details, refine the plan, and make sure everything feels just right.',
    icon: 'ticket',
  },
  {
    title: 'Enjoy The Magic',
    copy: 'Pack your bags, get excited, and head into a trip that feels lighter, sweeter, and beautifully organized.',
    icon: 'castle',
  },
]

export function ServicesPage() {
  return (
    <main className="page-main storybook-subpage services-storybook">
      <section className="services-magic-hero shell" aria-labelledby="services-title">
        <div className="services-magic-hero__copy">
          <p className="eyebrow">Our Services</p>
          <h1 id="services-title">Thoughtful planning. Magical experiences. Memories that last a lifetime.</h1>
          <p>
            From castles and cruises to sunny family escapes, Vixie Dust Travels helps shape vacations that feel
            beautiful, manageable, and full of anticipation from the very beginning.
          </p>
        </div>
      </section>

      <section className="section services-intro">
        <div className="shell services-intro__copy">
          <p className="storybook-section-label storybook-section-label--centered">
            Customized travel planning for families and groups
          </p>
          <h2 className="storybook-centered-heading">Every detail handled with care, so you can focus on the magic.</h2>
          <p className="services-intro__lead">
            Whether you are dreaming of park days, relaxing time at sea, or warm-weather memories together, the goal is
            always the same: create a trip that feels joyful, polished, and right for your people.
          </p>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="shell services-grid">
          {serviceCards.map((item) => (
            <article key={item.title} className="services-card">
              <div className="services-card__sparkles" aria-hidden="true" />
              <div
                className={`services-card__icon ${item.icon ? `services-card__icon--${item.icon}` : 'services-card__icon--photo'}`}
                aria-hidden="true"
              >
                {item.image ? <img src={item.image} alt="" /> : <span />}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Link to="/inquire" className="services-card__link">
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="storybook-divider storybook-divider--gold" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section services-process">
        <div className="shell">
          <p className="storybook-section-label storybook-section-label--centered">How it works</p>
          <h2 className="storybook-centered-heading">A planning process that feels warm, collaborative, and easy.</h2>
          <div className="services-process__grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="services-step">
                <div className={`services-step__icon services-step__icon--${step.icon}`} aria-hidden="true" />
                <div className="services-step__number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
            <div className="services-process__fox" aria-hidden="true">
              <img src="/logo-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="shell services-cta__inner">
          <div>
            <p className="eyebrow">Ready to start planning?</p>
            <h2>Your dream trip deserves a little pixie dust and a lot of thoughtful care.</h2>
            <p>I’m here to help turn the idea in your head into a getaway your family can actually look forward to.</p>
          </div>
          <Link to="/inquire" className="storybook-btn">
            Start Your Magical Journey
          </Link>
        </div>
      </section>
    </main>
  )
}
