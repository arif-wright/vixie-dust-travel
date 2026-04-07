import { useEffect, useRef, useState } from 'react'
import { Button } from './components/Button'
import { trackEvent } from './lib/analytics'

const destinations = [
  {
    eyebrow: 'Chapter One',
    title: 'Disney Vacations',
    description:
      'Park days, resort nights, and storybook pacing designed around your family, your fandoms, and your energy.',
    image:
      'https://images.unsplash.com/photo-1566264956508-41e8ef7f5cfc?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Resort matching', 'Dining strategy', 'Lightning Lane game plan'],
    note: 'For dreamers who want the magic and the logistics handled.',
    accent: 'Castle Mornings',
    className: 'journey-stop--castle',
  },
  {
    eyebrow: 'Chapter Two',
    title: 'Magical Cruises',
    description:
      'Smooth sailings with ship guidance, cabin insight, and port-day planning that keeps the wonder high and the stress low.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Ship comparisons', 'Cabin advice', 'Embarkation support'],
    note: 'For travelers who want elegance, ease, and a touch of ocean sparkle.',
    accent: 'Deckside Evenings',
    className: 'journey-stop--cruise',
  },
  {
    eyebrow: 'Chapter Three',
    title: 'Sunny Getaways',
    description:
      'Warm-weather escapes that balance beautiful resorts, practical budgets, and the kind of downtime that feels restorative.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
    highlights: ['Resort curation', 'Excursion ideas', 'Celebration-ready planning'],
    note: 'For beach lovers, honeymooners, and anyone craving sunshine with a real plan.',
    accent: 'Golden Hour',
    className: 'journey-stop--sun',
  },
]

const planningMoments = [
  'You tell us the dream, the budget, and the must-do moments.',
  'We shape the route, timing, and details into a trip that feels personal.',
  'You head out with a polished plan and a real human in your corner.',
]

const merchDrops = [
  {
    title: 'Park Day Tee',
    description: 'Vintage-wash comfort for rope-drop mornings and castle-photo afternoons.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pixie Dust Crewneck',
    description: 'A cozy staple for chilly resort lobbies, airport runs, and post-fireworks rides home.',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sticker Post Set',
    description: 'Postage-inspired fandom stickers made for journals, tumblers, and travel binders.',
    image:
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=1200&q=80',
  },
]

const testimonials = [
  {
    quote:
      'We stopped second-guessing every decision. The whole trip felt beautifully thought through from day one.',
    name: 'Alyssa R.',
    trip: 'Disney + Resort Split Stay',
    style: 'memory-card--one',
  },
  {
    quote:
      'We had real strategy without losing the fun of the trip. That balance was exactly what we needed.',
    name: 'The Nguyen Family',
    trip: 'Universal Orlando Planning',
    style: 'memory-card--two',
  },
  {
    quote:
      'Our cruise week felt effortless. Transfers, timing, and embarkation all clicked exactly the way we hoped.',
    name: 'Marcus and Tia L.',
    trip: '7-Night Caribbean Cruise',
    style: 'memory-card--three',
  },
]

const trustSignals = [
  'Free planning services',
  'Response within 1 business day',
  'Personalized support before you travel',
]

const navItems = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'services', label: 'Journeys' },
  { id: 'merch', label: 'Boutique' },
  { id: 'testimonials', label: 'Stories' },
  { id: 'intake', label: 'Book' },
]

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCelebrate, setShowCelebrate] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('welcome')
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
    if (!layer) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return

    let lastTime = 0
    const minInterval = 36

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span')
      sparkle.className = 'sparkle-dot'

      const size = 6 + Math.random() * 8
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--sparkle-rotate', `${Math.random() * 80 - 40}deg`)
      sparkle.style.setProperty('--sparkle-drift', `${Math.random() * 16 - 8}px`)
      sparkle.style.animationDuration = `${580 + Math.random() * 360}ms`

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
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-28% 0px -46% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65],
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
        <div className="loading-overlay" role="status" aria-live="polite" aria-label="Loading Vixie Dust Travels">
          <div className="loading-inner">
            <img src="/logo.svg" alt="" aria-hidden="true" className="loading-logo" />
            <p className="loading-text">Sprinkling A Little Magic...</p>
          </div>
        </div>
      ) : null}
      <div ref={sparkleLayerRef} className="sparkle-layer" aria-hidden="true" />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="nav-shell sticky top-0 z-50 border-b border-plum/15 bg-cream/88 text-ink backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Vixie Dust Travel home">
            <div className="nav-crest">
              <img src="/logo.svg" alt="Vixie Dust fox logo" className="logo-mark h-8 w-8" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-plum">Vixie Dust</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-orange">Travel Agency</p>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-2 text-sm font-semibold text-ink/80 md:flex">
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
            href="#intake"
            className="nav-cta hidden sm:inline-flex"
            onClick={() => handleCtaClick('Start Planning My Trip', 'navbar_desktop')}
          >
            Start Planning My Trip
          </Button>

          <Button
            href="#intake"
            className="nav-cta sm:hidden !px-4 !py-2 !text-xs"
            onClick={() => handleCtaClick('Start Planning', 'navbar_mobile')}
          >
            Start Planning
          </Button>
        </div>

        <nav aria-label="Mobile sections" className="nav-mobile-strip md:hidden">
          <div className="nav-mobile-scroll">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-mobile-link ${activeSection === item.id ? 'nav-mobile-link-active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content" className="site-grit">
        <section className="hero-scene relative overflow-hidden">
          <div className="hero-atmosphere" aria-hidden="true" />
          <div className="hero-dust hero-dust--left" aria-hidden="true" />
          <div className="hero-dust hero-dust--right" aria-hidden="true" />

          <div className="scene-shell scene-shell--hero grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <div className="hero-copy">
              <p className="scene-kicker">Boutique planning for magical vacations</p>
              <h1 className="hero-title">
                Plan a magical trip
                <span className="block text-orange">without planning it alone.</span>
              </h1>
              <p className="hero-description">
                Disney vacations, cruises, and sunny escapes shaped with polished strategy, warm guidance, and concierge-level support from quote to takeoff.
              </p>

              <div className="hero-actions mt-8 flex flex-wrap gap-3">
                <Button href="#intake" className="hero-primary-cta" onClick={() => handleCtaClick('Start Planning My Trip Now', 'hero_primary')}>
                  Start Planning My Trip Now
                </Button>
                <Button href="#services" variant="secondary" className="hero-secondary-cta" onClick={() => handleCtaClick('Explore Journey Map', 'hero_secondary')}>
                  See Travel Options
                </Button>
              </div>

              <div className="hero-proof-row">
                {trustSignals.map((signal) => (
                  <span key={signal} className="hero-proof-pill">
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-stage">
              <div className="hero-portal">
                <div className="hero-portal-image">
                  <img
                    src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80"
                    alt="A magical castle scene at dusk"
                    className="h-full w-full object-cover object-[50%_42%]"
                  />
                </div>
                <div className="hero-caption">
                  <p className="hero-ticket-label">What you get</p>
                  <p className="hero-ticket-title">A clear plan, a faster booking path, and a real person in your corner.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scene-divider scene-divider--hero" aria-hidden="true" />
        </section>

        <section id="welcome" className="scene-section scene-section--welcome">
          <div className="scene-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="welcome-portrait">
              <div className="welcome-portrait-frame">
                <img src="/logo.svg" alt="Vixie Dust fox mascot" className="h-40 w-40 object-contain md:h-52 md:w-52" />
              </div>
              <div className="welcome-seal">
                <span>Vixie Approved</span>
              </div>
            </div>

            <div className="welcome-editorial">
              <p className="scene-kicker">Step inside the world of Vixie Dust</p>
              <h2 className="scene-title">Planning that feels equal parts enchanting and genuinely useful.</h2>
              <p className="scene-copy">
                We build vacations for travelers who want more than a booking link. You get thoughtful recommendations, practical structure, and a planner who understands both the emotional magic and the real-life logistics.
              </p>

              <div className="journey-script">
                {planningMoments.map((item, index) => (
                  <div key={item} className="journey-script-step">
                    <span className="journey-script-index">0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="#services" onClick={() => handleCtaClick('See How We Plan', 'welcome_section')}>
                  See How We Plan
                </Button>
              </div>
            </div>
          </div>

          <div className="scene-divider scene-divider--soft" aria-hidden="true" />
        </section>

        <section id="services" className="scene-section scene-section--services">
          <div className="scene-shell">
            <div className="section-intro section-intro--center">
              <p className="scene-kicker">Choose your journey</p>
              <h2 className="scene-title">Three signature escapes, told like destinations instead of boxes.</h2>
              <p className="scene-copy">
                Every trip starts with a different kind of wonder, but each one comes with the same clear planning support, responsive communication, and boutique-level care.
              </p>
            </div>

            <div className="journey-map">
              {destinations.map((destination) => (
                <article key={destination.title} className={`journey-stop ${destination.className}`}>
                  <div className="journey-stop-media">
                    <img src={destination.image} alt={`${destination.title} destination preview`} className="h-full w-full object-cover" loading="lazy" />
                    <span className="journey-stop-accent">{destination.accent}</span>
                  </div>

                  <div className="journey-stop-copy">
                    <p className="journey-stop-eyebrow">{destination.eyebrow}</p>
                    <h3>{destination.title}</h3>
                    <p className="journey-stop-description">{destination.description}</p>
                    <ul className="journey-stop-list">
                      {destination.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="journey-stop-note">{destination.note}</p>
                    <Button
                      href="#intake"
                      variant="secondary"
                      className="journey-stop-button"
                      onClick={() => handleCtaClick(`Plan ${destination.title}`, 'services_section')}
                    >
                      Plan This Escape
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="scene-divider scene-divider--soft" aria-hidden="true" />
        </section>

        <section id="merch" className="scene-section scene-section--merch">
          <div className="scene-shell">
            <div className="boutique-shell">
              <div className="boutique-copy">
                <p className="scene-kicker">The Vixie boutique</p>
                <h2 className="scene-title">A small shop of keepsakes for the days between departures.</h2>
                <p className="scene-copy">
                  Merch is the fun side quest: thoughtful, fandom-friendly pieces that keep the trip energy alive after you&apos;ve unpacked.
                </p>
                <Button
                  href="#intake"
                  variant="secondary"
                  onClick={() => handleCtaClick('Browse Boutique', 'merch_section')}
                >
                  Ask About Merch
                </Button>
              </div>

              <div className="boutique-gallery" aria-label="Featured merchandise">
                {merchDrops.map((item) => (
                  <article key={item.title} className="boutique-item">
                    <div className="boutique-item-image">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="boutique-item-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="scene-divider scene-divider--soft" aria-hidden="true" />
        </section>

        <section id="testimonials" className="scene-section scene-section--memories">
          <div className="scene-shell">
            <div className="section-intro">
              <p className="scene-kicker">Traveler stories</p>
              <h2 className="scene-title">The trust section, retold as a wall of keepsakes and happy returns.</h2>
              <p className="scene-copy">
                We want travelers to feel supported, answered, and excited. These stories reflect the kind of experience we aim to create every time.
              </p>
            </div>

            <div className="memory-wall">
              <div className="memory-grid">
                {testimonials.map((testimonial) => (
                  <figure key={testimonial.name} className={`memory-card ${testimonial.style}`}>
                    <span className="memory-pin" aria-hidden="true" />
                    <blockquote>{testimonial.quote}</blockquote>
                    <figcaption>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.trip}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <aside className="trust-column">
                <div className="trust-column-inner">
                  <p className="trust-kicker">Why travelers book with us</p>
                  <ul className="trust-list">
                    <li>Authorized planning support with a real person guiding the details.</li>
                    <li>Planning services are included, so the expertise feels accessible, not gatekept.</li>
                    <li>Questions get answered quickly, clearly, and with zero judgment.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>

          <div className="scene-divider scene-divider--soft" aria-hidden="true" />
        </section>

        <section id="intake" className="scene-section scene-section--booking">
          <div className="scene-shell">
            <div className="booking-shell">
              <div className="booking-copy">
                <p className="scene-kicker">Begin the booking chapter</p>
                <h2 className="scene-title">Tell us where the story starts, and we&apos;ll shape the rest.</h2>
                <p className="scene-copy">
                  This form keeps the first step easy. Share a few details, and we&apos;ll follow up with thoughtful next steps for your trip.
                </p>

                <div className="booking-notes">
                  <div>
                    <span>01</span>
                    <p>Share your destination, dates, and travel style.</p>
                  </div>
                  <div>
                    <span>02</span>
                    <p>We review the fit, timing, and planning needs for your trip.</p>
                  </div>
                  <div>
                    <span>03</span>
                    <p>You get a warm reply with real momentum, not an automated dead end.</p>
                  </div>
                </div>
              </div>

              <div className="booking-form-frame">
                <form className="booking-form" onSubmit={handleLeadSubmit}>
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
                      Dream destination
                    </label>
                    <select id="destination" name="destination" required className="input-field">
                      <option value="">Select one</option>
                      <option value="disney">Disney</option>
                      <option value="universal">Universal</option>
                      <option value="cruise">Cruise</option>
                      <option value="multi">Multi-destination</option>
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
                      Trip style
                    </label>
                    <select id="tripType" name="tripType" required className="input-field">
                      <option value="">Select one</option>
                      <option value="family">Family trip</option>
                      <option value="couples">Couples trip</option>
                      <option value="group">Group trip</option>
                      <option value="celebration">Celebration trip</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-ink">
                      Budget target
                    </label>
                    <input id="budget" name="budget" className="input-field" placeholder="Optional" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-semibold text-ink">
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="4"
                      className="input-field min-h-[140px] resize-y"
                      placeholder="Tell us your priorities, dates, must-do moments, or accessibility needs"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                    <button type="submit" className="btn-primary" onClick={() => handleCtaClick('Submit Trip Form', 'intake_form')}>
                      Start Planning My Trip
                    </button>
                    <p className="text-sm text-ink/65">By submitting, you agree to be contacted about your trip plan.</p>
                  </div>

                  <div className="md:col-span-2 flex flex-wrap gap-2">
                    {trustSignals.map((signal) => (
                      <span key={signal} className="form-trust-chip">
                        {signal}
                      </span>
                    ))}
                  </div>
                </form>

                {isSubmitted ? (
                  <p role="status" className={`mt-4 rounded-xl border border-green-700/25 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 ${showCelebrate ? 'form-success' : ''}`}>
                    Thanks. We received your details and will follow up with next steps.
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="scene-divider scene-divider--soft" aria-hidden="true" />
        </section>

        <section id="start" className="scene-section scene-section--final">
          <div className="scene-shell scene-shell--final mx-auto max-w-5xl text-center">
            <div className="final-portal">
              <p className="scene-kicker">Last stop</p>
              <h2 className="scene-title">Ready to trade endless tabs for a beautifully planned trip?</h2>
              <p className="scene-copy mx-auto max-w-2xl">
                Step into the next chapter with a planner who knows how to make the experience feel magical before you ever leave home.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href="#intake" onClick={() => handleCtaClick('Plan My Trip', 'final_cta_primary')}>
                  Plan My Trip
                </Button>
                <Button href="#welcome" variant="light" onClick={() => handleCtaClick('Meet Vixie Dust', 'final_cta_secondary')}>
                  Meet Vixie Dust
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
