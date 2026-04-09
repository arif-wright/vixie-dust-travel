import { trackEvent } from './lib/analytics'

const services = [
  {
    id: 'disney',
    title: 'Disney Vacations',
    text: 'Family-friendly, fantasy-filled trips with thoughtful planning for park days, resorts, and magical moments.',
    icon: 'castle',
  },
  {
    id: 'cruises',
    title: 'Magical Cruises',
    text: 'Sail-away vacations with curated ship choices, smooth itineraries, and joyful onboard experiences.',
    icon: 'ship',
  },
  {
    id: 'sunny',
    title: 'Sunny Getaways',
    text: 'Beachy escapes, tropical resorts, and warm-weather retreats for easy family memories.',
    icon: 'palms',
  },
]

const testimonials = [
  {
    quote: 'Every detail felt easy and magical. We just showed up and enjoyed every second.',
    name: 'The Ramirez Family',
  },
  {
    quote: 'She planned our dream cruise and made it completely stress-free.',
    name: 'Alyssa M.',
  },
  {
    quote: 'Our Disney trip felt like a storybook. We are already planning our next one.',
    name: 'The Chens',
  },
]

function App() {
  const handleClick = (label, location) => {
    trackEvent('cta_click', { label, location })
  }

  return (
    <div className="site-shell">
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              Sprinkling Magic
              <span>on Every Journey</span>
            </h1>
            <p className="hero-subtitle">Making your dream vacation a reality with a touch of pixie dust.</p>
            <a
              href="#contact"
              className="button-primary"
              onClick={() => handleClick('Start Your Magical Journey', 'hero')}
            >
              Start Your Magical Journey
            </a>
          </div>
        </section>

        <section className="welcome" id="welcome">
          <div className="welcome-grid">
            <div className="mascot-wrap" aria-hidden="true">
              <img src="/logo-3.png" alt="" className="mascot" />
              <span className="wand-star">✦</span>
            </div>
            <div className="welcome-copy">
              <h2>Welcome to Vixie Dust Travels!</h2>
              <p className="welcome-lead">Hi! We’re your fairy godmother for family vacations.</p>
              <p>
                Planning Disney, cruises, and tropical vacations isn’t just our job, it’s our passion. With a
                sprinkle of magic, we craft personalized trips that bring smiles, wonder, and unforgettable memories.
              </p>
              <a
                href="#services"
                className="button-primary button-secondary-size"
                onClick={() => handleClick('Learn More Welcome', 'welcome')}
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="services cloud-top" id="services" aria-labelledby="services-title">
          <div className="section-head">
            <h2 id="services-title">Our Services</h2>
            <p>Travel planning as enchanting as the Magic Kingdom</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className={`service-card-top service-card-top--${service.icon}`} aria-hidden="true">
                  <div className={`service-icon service-icon--${service.icon}`} />
                </div>
                <div className="service-card-cloud-row" aria-hidden="true">
                  <img src="/cloud-divider.png" alt="" className="service-cloud-image" />
                  <span className="service-cloud service-cloud--outer-left" />
                  <span className="service-cloud service-cloud--inner-left" />
                  <span className="service-cloud service-cloud--center" />
                  <span className="service-cloud service-cloud--inner-right" />
                  <span className="service-cloud service-cloud--outer-right" />
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href="#contact"
                    className="button-primary button-card"
                    onClick={() => handleClick(`Learn More ${service.title}`, 'services')}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials cloud-top" id="stories" aria-labelledby="stories-title">
          <div className="section-head section-head--tight">
            <h2 id="stories-title">What Our Happy Travelers Are Saying</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="testimonial-card">
                <p>“{item.quote}”</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-card">
            <h2 id="contact-title">Let’s Plan Your Magical Escape</h2>
            <p>Tell us where you want to go and we’ll start designing your pixie-dusted itinerary.</p>
            <a
              href="mailto:hello@vixiedusttravel.com"
              className="button-primary"
              onClick={() => handleClick('Email CTA', 'contact')}
            >
              Begin Planning
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
