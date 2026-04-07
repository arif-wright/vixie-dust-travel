import { useEffect, useRef, useState } from 'react'
import { Button } from './components/Button'
import { trackEvent } from './lib/analytics'

const navItems = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'experiences', label: 'Adventures' },
  { id: 'process', label: 'Process' },
  { id: 'stories', label: 'Stories' },
  { id: 'consultation', label: 'Consult' },
]

const experiences = [
  {
    eyebrow: 'Story One',
    title: 'Park Icons And Resort Nights',
    subhead: 'Disney vacations with strategy behind the wonder.',
    description:
      'For travelers who want fireworks, food, and fandom-level excitement without spending the whole trip managing logistics.',
    highlights: ['Resort pairing', 'Dining timing', 'Ride strategy', 'Celebration planning'],
    image:
      'https://images.unsplash.com/photo-1566264956508-41e8ef7f5cfc?auto=format&fit=crop&w=1400&q=80',
    className: 'experience-panel--castle',
  },
  {
    eyebrow: 'Story Two',
    title: 'Deckside Magic And Smooth Sailings',
    subhead: 'Cruises designed for ease, elegance, and zero scramble.',
    description:
      'From choosing the right ship to embarkation flow and port-day priorities, every detail gets shaped into a calmer, more exciting trip.',
    highlights: ['Ship fit', 'Cabin advice', 'Transfer planning', 'Port-day flow'],
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80',
    className: 'experience-panel--cruise',
  },
  {
    eyebrow: 'Story Three',
    title: 'Sunlit Escapes With More Personality',
    subhead: 'Beach and warm-weather getaways that feel curated, not generic.',
    description:
      'For couples, families, and celebration travelers who want tropical energy, polished recommendations, and less time overthinking every booking choice.',
    highlights: ['Resort curation', 'Excursion picks', 'Budget guidance', 'Celebration extras'],
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
    className: 'experience-panel--sun',
  },
]

const processSteps = [
  {
    title: 'Dream It',
    text: 'You share your dates, priorities, budget comfort zone, and the kind of trip energy you want.',
  },
  {
    title: 'Shape It',
    text: 'Vixie Dust maps the best fit, watches the details, and turns your ideas into a polished plan.',
  },
  {
    title: 'Book It',
    text: 'Reservations, timing, and logistics come together with a real strategy instead of guesswork.',
  },
  {
    title: 'Enjoy It',
    text: 'You travel with more excitement, less tab chaos, and a planner still in your corner before departure.',
  },
]

const trustNotes = [
  'Planning services are included, so guidance feels accessible instead of gatekept.',
  'Response times stay quick, thoughtful, and human.',
  'Every recommendation is shaped around experience, not just availability.',
]

const testimonials = [
  {
    quote:
      'We stopped second-guessing every choice. It finally felt like someone understood both the magic and the logistics.',
    name: 'Alyssa R.',
    trip: 'Disney + Resort Split Stay',
    className: 'story-card--one',
  },
  {
    quote:
      'The cruise felt effortless. We had the right cabin, the right timing, and none of the stress we usually carry into a trip.',
    name: 'Marcus and Tia L.',
    trip: '7-Night Caribbean Cruise',
    className: 'story-card--two',
  },
  {
    quote:
      'The recommendations felt personal instead of generic. We got a trip that actually matched how we like to travel.',
    name: 'The Nguyen Family',
    trip: 'Theme Park Vacation Planning',
    className: 'story-card--three',
  },
]

const trustSignals = [
  'Free planning services',
  'Quick replies',
  'Personalized recommendations',
]

function App() {
  const [activeSection, setActiveSection] = useState('welcome')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCelebrate, setShowCelebrate] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const sparkleLayerRef = useRef(null)

  useEffect(() => {
    const hideLoader = () => setIsLoading(false)

    const timeoutId = window.setTimeout(hideLoader, 900)
    window.addEventListener('load', hideLoader, { once: true })

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('load', hideLoader)
    }
  }, [])

  useEffect(() => {
    const layer = sparkleLayerRef.current
    if (!layer) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return undefined

    let lastTime = 0
    const minInterval = 34

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span')
      sparkle.className = 'sparkle-dot'

      const size = 6 + Math.random() * 7
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--sparkle-rotate', `${Math.random() * 80 - 40}deg`)
      sparkle.style.setProperty('--sparkle-drift', `${Math.random() * 16 - 8}px`)
      sparkle.style.animationDuration = `${560 + Math.random() * 340}ms`

      layer.appendChild(sparkle)
      window.setTimeout(() => sparkle.remove(), 1100)
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

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-24% 0px -48% 0px',
        threshold: [0.2, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleCtaClick = (label, location) => {
    trackEvent('cta_click', { label, location })
  }

  const handleLeadSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    trackEvent('lead_form_submit', {
      destination: String(formData.get('destination') || ''),
      travel_window: String(formData.get('travelWindow') || ''),
      trip_type: String(formData.get('tripType') || ''),
    })

    event.currentTarget.reset()
    setIsSubmitted(true)
    setShowCelebrate(true)
    window.setTimeout(() => setShowCelebrate(false), 2200)
  }

  return (
    <div className="min-h-screen font-body text-ink">
      {isLoading ? (
        <div className="loading-overlay" role="status" aria-live="polite" aria-label="Loading Vixie Dust Travel">
          <div className="loading-inner">
            <img src="/logo.svg" alt="" aria-hidden="true" className="loading-logo" />
            <p className="loading-text">Opening The Map...</p>
          </div>
        </div>
      ) : null}

      <div ref={sparkleLayerRef} className="sparkle-layer" aria-hidden="true" />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-shell">
          <a href="#" className="brand-lockup" aria-label="Vixie Dust Travel home">
            <div className="brand-mark">
              <img src="/logo.svg" alt="Vixie Dust fox logo" className="logo-mark h-8 w-8" />
            </div>
            <div>
              <p className="brand-wordmark">Vixie Dust</p>
              <p className="brand-subtitle">Travel Concierge</p>
            </div>
          </a>

          <nav aria-label="Primary" className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            href="#consultation"
            className="header-cta hidden sm:inline-flex"
            onClick={() => handleCtaClick('Book Your Consultation', 'header_desktop')}
          >
            Book Your Consultation
          </Button>

          <Button
            href="#consultation"
            className="header-cta sm:hidden !px-4 !text-xs"
            onClick={() => handleCtaClick('Book Consultation', 'header_mobile')}
          >
            Book
          </Button>
        </div>

        <nav aria-label="Mobile section navigation" className="mobile-nav">
          <div className="mobile-nav-scroll">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-link-active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content" className="site-grit">
        <section className="hero-scene">
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="hero-glow hero-glow--left" aria-hidden="true" />
          <div className="hero-glow hero-glow--right" aria-hidden="true" />

          <div className="scene-shell scene-shell--hero hero-layout">
            <div className="hero-copy">
              <p className="scene-kicker">Stress-free vacation planning with personality</p>
              <h1 className="hero-title">
                The vacation should feel magical
                <span className="block text-orange">before you even leave home.</span>
              </h1>
              <p className="hero-description">
                Vixie Dust Travel plans Disney trips, cruises, and immersive escapes with boutique care, fandom-aware guidance, and polished logistics from dreaming to departure.
              </p>

              <div className="hero-actions">
                <Button
                  href="#consultation"
                  className="hero-primary-cta"
                  onClick={() => handleCtaClick('Start Planning Your Vacation', 'hero_primary')}
                >
                  Start Planning Your Vacation
                </Button>
                <Button
                  href="#experiences"
                  variant="secondary"
                  className="hero-secondary-cta"
                  onClick={() => handleCtaClick('Explore Vacation Styles', 'hero_secondary')}
                >
                  Explore Vacation Styles
                </Button>
              </div>

              <div className="hero-proof">
                {trustSignals.map((signal) => (
                  <span key={signal} className="hero-proof-chip">
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-portal">
                <div className="hero-portal-image">
                  <img
                    src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80"
                    alt="A dramatic magical castle scene at dusk"
                    className="h-full w-full object-cover object-[52%_42%]"
                  />
                </div>

                <aside className="hero-note hero-note--main">
                  <p className="hero-note-label">Vixie approach</p>
                  <p className="hero-note-title">Wonder in the mood board. Strategy in the itinerary.</p>
                </aside>

                <aside className="hero-note hero-note--stats">
                  <p className="hero-note-label">Journey flow</p>
                  <p className="hero-note-route">Dreaming → Matching → Booking → Departure</p>
                </aside>
              </div>
            </div>
          </div>

          <div className="scene-wave scene-wave--hero" aria-hidden="true" />
        </section>

        <section id="welcome" className="scene-section scene-section--welcome">
          <div className="scene-shell welcome-layout">
            <div className="welcome-figure">
              <div className="welcome-figure-frame">
                <img src="/logo.svg" alt="Vixie Dust fox mascot" className="h-44 w-44 object-contain md:h-52 md:w-52" />
              </div>
              <div className="welcome-stamp">Curated with Vixie Dust</div>
            </div>

            <div className="welcome-copy">
              <p className="scene-kicker">Why book with Vixie Dust Travel</p>
              <h2 className="scene-title">A travel planner who understands the vibe, not just the booking engine.</h2>
              <p className="scene-copy">
                This isn&apos;t generic vacation planning. It&apos;s concierge-minded guidance for travelers chasing anticipation, atmosphere, and the kind of details that make a trip feel special.
              </p>

              <div className="welcome-ribbon">
                <p>Thoughtful recommendations tailored to how you actually travel.</p>
                <p>Real planning help that keeps the excitement high and the logistics calm.</p>
                <p>Professional enough to trust, playful enough to still feel magical.</p>
              </div>
            </div>
          </div>

          <div className="scene-wave scene-wave--soft" aria-hidden="true" />
        </section>

        <section id="experiences" className="scene-section scene-section--experiences">
          <div className="scene-shell">
            <div className="section-heading section-heading--center">
              <p className="scene-kicker">Choose your adventure</p>
              <h2 className="scene-title">Three ways into the story, all planned with the same obsessive care.</h2>
              <p className="scene-copy">
                Each trip type gets its own mood, pacing, and strategy, but the through-line stays the same: a polished experience that feels curated instead of cookie-cutter.
              </p>
            </div>

            <div className="experience-river">
              {experiences.map((experience) => (
                <article key={experience.title} className={`experience-panel ${experience.className}`}>
                  <div className="experience-media">
                    <img src={experience.image} alt={experience.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  <div className="experience-copy">
                    <p className="experience-eyebrow">{experience.eyebrow}</p>
                    <h3>{experience.title}</h3>
                    <p className="experience-subhead">{experience.subhead}</p>
                    <p className="experience-description">{experience.description}</p>
                    <ul className="experience-points">
                      {experience.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="scene-wave scene-wave--soft" aria-hidden="true" />
        </section>

        <section id="process" className="scene-section scene-section--process">
          <div className="scene-shell">
            <div className="section-heading">
              <p className="scene-kicker">From dreaming to departure</p>
              <h2 className="scene-title">A planning process that keeps the momentum magical.</h2>
              <p className="scene-copy">
                The best travel planning feels like an unfolding story, not a pile of tasks. Every stage is designed to move you from idea to itinerary with less friction and more excitement.
              </p>
            </div>

            <div className="process-path">
              {processSteps.map((step, index) => (
                <div key={step.title} className="process-stop">
                  <span className="process-index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="scene-wave scene-wave--soft" aria-hidden="true" />
        </section>

        <section id="stories" className="scene-section scene-section--stories">
          <div className="scene-shell stories-layout">
            <div className="stories-copy">
              <p className="scene-kicker">Traveler stories</p>
              <h2 className="scene-title">Proof that the planning can feel as good as the trip itself.</h2>
              <p className="scene-copy">
                When clients talk about Vixie Dust Travel, the pattern is always the same: more confidence, less chaos, and a trip that feels thoughtfully theirs.
              </p>

              <ul className="trust-list">
                {trustNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="stories-stack">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className={`story-card ${testimonial.className}`}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.trip}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="scene-wave scene-wave--soft" aria-hidden="true" />
        </section>

        <section id="consultation" className="scene-section scene-section--consultation">
          <div className="scene-shell consultation-layout">
            <div className="consultation-copy">
              <p className="scene-kicker">Plan your consultation</p>
              <h2 className="scene-title">Tell us where you want to go, and we&apos;ll help shape the feeling of the whole trip.</h2>
              <p className="scene-copy">
                Share a few details and Vixie Dust Travel will follow up with a thoughtful next step, not a generic sales sequence.
              </p>

              <div className="consultation-aside">
                <p>Best for travelers who want help deciding, comparing, and creating a trip with more personality.</p>
                <p>Great for first-timers, celebration trips, and anyone tired of planning in twenty open tabs.</p>
              </div>
            </div>

            <div className="consultation-frame">
              <form className="consultation-form" onSubmit={handleLeadSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-ink">
                    Full name
                  </label>
                  <input id="fullName" name="fullName" required className="input-field" autoComplete="name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className="input-field" autoComplete="email" />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-ink">
                    Vacation style
                  </label>
                  <select id="destination" name="destination" required className="input-field">
                    <option value="">Select one</option>
                    <option value="disney">Disney vacation</option>
                    <option value="cruise">Cruise</option>
                    <option value="sunny">Sunny getaway</option>
                    <option value="multi">Still deciding</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="travelWindow" className="block text-sm font-semibold text-ink">
                    Travel window
                  </label>
                  <input id="travelWindow" name="travelWindow" required className="input-field" placeholder="Example: October 2026" />
                </div>

                <div>
                  <label htmlFor="tripType" className="block text-sm font-semibold text-ink">
                    Trip vibe
                  </label>
                  <select id="tripType" name="tripType" required className="input-field">
                    <option value="">Select one</option>
                    <option value="family">Family adventure</option>
                    <option value="couples">Couples getaway</option>
                    <option value="group">Group trip</option>
                    <option value="celebration">Celebration trip</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-ink">
                    Budget thoughts
                  </label>
                  <input id="budget" name="budget" className="input-field" placeholder="Optional" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-semibold text-ink">
                    What are you dreaming about?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    className="input-field min-h-[140px] resize-y"
                    placeholder="Favorite destinations, travel dates, celebration plans, or must-have moments"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                  <button type="submit" className="btn-primary" onClick={() => handleCtaClick('Request Consultation', 'consultation_form')}>
                    Request My Consultation
                  </button>
                  <p className="text-sm text-ink/65">By submitting, you agree to be contacted about your trip plans.</p>
                </div>
              </form>

              {isSubmitted ? (
                <p role="status" className={`mt-4 rounded-xl border border-green-700/25 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 ${showCelebrate ? 'form-success' : ''}`}>
                  Thanks. Your consultation request is in, and we&apos;ll follow up with next steps soon.
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
