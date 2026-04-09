import { useEffect, useRef } from 'react'
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

const magicSteps = [
  {
    title: 'Dream It',
    text: 'Share your wish-list, travel dates, and the vibe you want your vacation to have.',
  },
  {
    title: 'Design It',
    text: 'We handpick resorts, routes, and experiences that match your family perfectly.',
  },
  {
    title: 'Book It',
    text: 'You get clear recommendations and guided booking support with zero guesswork.',
  },
  {
    title: 'Enjoy It',
    text: 'Head out with confidence, pixie-dusted plans, and magical moments already in motion.',
  },
]

const trustBadges = [
  'Personalized Planning',
  'Family-Friendly Expertise',
  'Stress-Free Booking Support',
  'Fast, Thoughtful Replies',
]

const faqItems = [
  {
    question: 'Do you charge planning fees?',
    answer:
      'Most vacation packages we plan do not require a separate planning fee. For specialty itineraries, we always explain pricing up front before any commitment.',
  },
  {
    question: 'Can you help if we are not sure where to go yet?',
    answer:
      'Absolutely. Many families come to us with only dates and a travel style in mind. We help narrow the options into a magical shortlist.',
  },
  {
    question: 'Do you only plan Disney vacations?',
    answer:
      'Disney is one of our specialties, but we also plan cruises and sunny getaways tailored to your family and budget.',
  },
]

function App() {
  const pointerTrailRef = useRef(null)

  useEffect(() => {
    const layer = pointerTrailRef.current
    if (!layer) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return undefined

    let lastTime = 0
    const minInterval = 30

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span')
      sparkle.className = 'pointer-sparkle'

      const size = 6 + Math.random() * 8
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--sparkle-rotate', `${Math.random() * 70 - 35}deg`)
      sparkle.style.setProperty('--sparkle-drift-x', `${Math.random() * 18 - 9}px`)
      sparkle.style.setProperty('--sparkle-drift-y', `${Math.random() * 16 - 8}px`)
      sparkle.style.animationDuration = `${520 + Math.random() * 340}ms`

      layer.appendChild(sparkle)
      window.setTimeout(() => sparkle.remove(), 980)
    }

    const handleMove = (event) => {
      const now = performance.now()
      if (now - lastTime < minInterval) return
      lastTime = now
      spawnSparkle(event.clientX, event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const handleClick = (label, location) => {
    trackEvent('cta_click', { label, location })
  }

  return (
    <div className="site-shell">
      <div ref={pointerTrailRef} className="pointer-sparkle-layer" aria-hidden="true" />
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

        <section className="magic-process cloud-top" id="process" aria-labelledby="process-title">
          <div className="section-head">
            <h2 id="process-title">How The Magic Happens</h2>
            <p>A simple, joyful process from first idea to wheels up.</p>
          </div>
          <div className="magic-step-grid">
            {magicSteps.map((step, index) => (
              <article key={step.title} className="magic-step-card">
                <span className="magic-step-badge">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pixie-strip" aria-label="Why families choose Vixie Dust">
          <div className="pixie-strip-inner">
            {trustBadges.map((badge) => (
              <span key={badge} className="pixie-chip">
                ✦ {badge}
              </span>
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

        <section className="faq cloud-top" id="faq" aria-labelledby="faq-title">
          <div className="section-head section-head--tight">
            <h2 id="faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
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
