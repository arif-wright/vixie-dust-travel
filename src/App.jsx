import { useEffect, useRef, useState } from 'react'
import { Button } from './components/Button'
import { DestinationCard } from './components/DestinationCard'
import { SectionHeading } from './components/SectionHeading'
import { TestimonialCard } from './components/TestimonialCard'
import { TrustItem } from './components/TrustItem'
import { trackEvent } from './lib/analytics'

const destinations = [
  {
    title: 'Disney Vacations',
    description:
      'Family-friendly planning for parks, resorts, and magical memory-making moments.',
    image:
      'https://images.unsplash.com/photo-1566264956508-41e8ef7f5cfc?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Park strategy', 'Resort matching', 'Dining timing'],
  },
  {
    title: 'Magical Cruises',
    description:
      'Sail smoothly with tailored cruise guidance, room recommendations, and port-day planning.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Ship matching', 'Cabin advice', 'Port-day plans'],
  },
  {
    title: 'Sunny Getaways',
    description:
      'Beachy escapes and tropical adventures designed for stress-free fun and easy logistics.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Resort picks', 'Excursion tips', 'Budget-friendly options'],
  },
]

const services = [
  {
    icon: '🏰',
    title: 'Custom Itinerary Design',
    text: 'We build day-by-day plans around your priorities, mobility needs, and realistic pace.',
  },
  {
    icon: '🚢',
    title: 'Booking + Offer Monitoring',
    text: 'We manage reservations and track promotions so your trip stays optimized as prices shift.',
  },
  {
    icon: '🌴',
    title: 'Pre-Trip Concierge Support',
    text: 'Before departure, you get a clear action timeline and direct answers to every logistics question.',
  },
]

const testimonials = [
  {
    quote:
      'We stopped second-guessing every decision. The plan was tight, practical, and actually fun to follow.',
    name: 'Alyssa R.',
    trip: 'Disney + Resort Split Stay',
  },
  {
    quote:
      'The Universal strategy alone saved us hours. We felt prepared without feeling over-scheduled.',
    name: 'The Nguyen Family',
    trip: 'Universal Orlando',
  },
  {
    quote:
      'Our cruise week was smooth from airport transfer to embarkation. Everything just clicked.',
    name: 'Marcus and Tia L.',
    trip: '7-Night Caribbean Cruise',
  },
]

const merchDrops = [
  {
    title: 'Park Day Tee',
    description: 'Soft, vintage-wash tees with Vixie Dust magic for park rope-drop days.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pixie Dust Crewneck',
    description: 'Cozy layering piece for chilly resort mornings and late-night fireworks.',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Travel Sticker Pack',
    description: 'Postage-inspired sticker set made for tumblers, journals, and park binders.',
    image:
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=1200&q=80',
  },
]

function App() {
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

      <header className="nav-shell sticky top-0 z-50 border-b border-plum/15 bg-cream/96 text-ink backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Vixie Dust Travel home">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold/50 bg-mist">
              <img
                src="/logo.svg"
                alt="Vixie Dust fox logo"
                className="logo-mark h-8 w-8"
              />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-plum">Vixie Dust</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-orange">Travel Agency</p>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-semibold text-ink/80 lg:flex">
            <a href="#welcome" className="nav-link">Welcome</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#merch" className="nav-link">Merch</a>
            <a href="#intake" className="nav-link">Plan</a>
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
      </header>

      <main id="main-content" className="site-grit">
        <section className="hero-reference relative overflow-hidden text-mist">
          <div className="hero-reference-overlay" />
          <div className="mx-auto w-full max-w-4xl px-5 pb-28 pt-20 text-center md:pb-36 md:pt-24">
            <div className="hero-copy-shell">
              <p className="inline-block rounded-full border border-gold/45 bg-gold/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-plum">
                Trusted Vacation Planning
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[0.92] text-plum md:text-7xl">
                Sprinkling Magic
                <span className="block">on Every Journey</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-plum/90 md:text-lg">
                Personalized Disney, cruise, and sunny getaway planning with clear guidance, warm support, and magical moments built in.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button href="#intake" onClick={() => handleCtaClick('Start Your Magical Journey', 'hero_primary')}>
                  Start Your Magical Journey
                </Button>
                <Button href="#services" variant="secondary" onClick={() => handleCtaClick('View Services', 'hero_secondary')}>
                  View Services
                </Button>
              </div>
            </div>
          </div>

          <div className="hero-wave-soft" aria-hidden="true" />
        </section>

        <section id="welcome" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div className="welcome-reference grid items-center gap-8 rounded-[2rem] border border-gold/40 bg-mist p-6 shadow-card md:grid-cols-[0.34fr_0.66fr] md:p-10">
            <div className="relative mx-auto w-fit">
              <img src="/logo.svg" alt="Vixie Dust fox mascot" className="h-40 w-40 object-contain md:h-48 md:w-48" />
            </div>
            <div>
              <p className="font-accent text-3xl text-orange">A little pixie dust, a lot of planning confidence</p>
              <h2 className="font-display text-4xl leading-tight text-plum md:text-5xl">Welcome to Vixie Dust Travels!</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                We plan Disney vacations, cruises, and tropical escapes with care, clarity, and concierge-level support from quote to takeoff.
              </p>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Every itinerary is tailored to your crew, budget, and travel style so your trip feels exciting and effortless.
              </p>
              <div className="mt-6">
                <Button href="#services" onClick={() => handleCtaClick('Learn More', 'welcome_section')}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section id="services" className="section-speckle mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <SectionHeading
            eyebrow="Our Services"
            title="Travel Planning With Magic And A Real Game Plan"
            description="Family-friendly planning support for Disney vacations, cruises, and sunny getaways with a professional structure behind every detail."
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section id="merch" className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="rounded-[1.8rem] border border-plum/15 bg-gradient-to-br from-white/70 via-mist to-cream p-6 shadow-card md:p-8">
            <SectionHeading
              eyebrow="Vixie Merch"
              title="A Little Magic To Wear Between Trips"
              description="Travel-first planning is still the priority, but clients can also shop limited Vixie Dust pieces inspired by park days and fandom culture."
              align="center"
            />

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {merchDrops.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[1.25rem] border border-plum/14 bg-white shadow-card">
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="space-y-3 p-4">
                    <h3 className="font-display text-2xl leading-tight text-plum">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/75">{item.description}</p>
                    <Button
                      href="#intake"
                      variant="secondary"
                      className="!px-5 !py-2.5 !text-sm"
                      onClick={() => handleCtaClick(`Shop ${item.title}`, 'merch_section')}
                    >
                      Shop Merch
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section id="testimonials" className="testimonial-panel mx-auto w-full max-w-6xl rounded-[1.8rem] px-5 py-14 md:px-8 md:py-18">
          <SectionHeading
            eyebrow="Happy Travelers"
            title="What Our Happy Travelers Are Saying"
            description="Kind words from families and couples who trusted us to bring the magic to life with less stress and more confidence."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section className="mx-auto w-full max-w-6xl px-5 pb-10 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustItem title="Authority" detail="Authorized Planning Support" />
            <TrustItem title="Value" detail="Free Planning Services Included" />
            <TrustItem title="Support" detail="Response Within 1 Business Day" />
          </div>
        </section>

        <section id="intake" className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <div className="rounded-[1.8rem] border border-plum/15 bg-mist p-6 shadow-card md:p-8">
            <SectionHeading
              eyebrow="Let’s Plan"
              title="Start Your Magical Adventure ✨"
              description="Share a few details and we’ll build a personalized trip plan."
            />

            <form className="mt-8 grid gap-6 md:grid-cols-2" onSubmit={handleLeadSubmit}>
              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum/70">Step 1: Contact Details</p>
              </div>
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

              <div className="md:col-span-2 mt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum/70">Step 2: Trip Preferences</p>
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
                  className="input-field min-h-[120px] resize-y"
                  placeholder="Tell us your priorities, dates, or must-do moments"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                <button type="submit" className="btn-primary" onClick={() => handleCtaClick('Submit Trip Form', 'intake_form')}>
                  Start Planning My Trip
                </button>
                <p className="text-sm text-ink/65">By submitting, you agree to be contacted about your trip plan.</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2">
                <span className="form-trust-chip">No obligation</span>
                <span className="form-trust-chip">Free planning service</span>
                <span className="form-trust-chip">Response within 1 business day</span>
              </div>
            </form>

            {isSubmitted ? (
              <p role="status" className={`mt-4 rounded-xl border border-green-700/25 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 ${showCelebrate ? 'form-success' : ''}`}>
                Thanks. We received your details and will follow up with next steps.
              </p>
            ) : null}
          </div>
        </section>

        <section id="start" className="final-cta relative overflow-hidden py-16 text-mist md:py-20">
          <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
            <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Ready To Lock It In
            </p>
            <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Start Planning My Trip</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist/85">
              Ready to see the magic come to life? Let&apos;s chat and map your dream itinerary.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#intake" onClick={() => handleCtaClick('Start Planning My Trip', 'final_cta_primary')}>
                Let&apos;s Plan Your Trip ✨
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
