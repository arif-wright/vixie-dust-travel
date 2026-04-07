import { useState } from 'react'
import { Button } from './components/Button'
import { DestinationCard } from './components/DestinationCard'
import { SectionHeading } from './components/SectionHeading'
import { StampBadge } from './components/StampBadge'
import { Starburst } from './components/Starburst'
import { TestimonialCard } from './components/TestimonialCard'
import { TrustItem } from './components/TrustItem'
import { trackEvent } from './lib/analytics'

const destinations = [
  {
    title: 'Disney',
    description:
      'Character dining, resort tiers, and lightning lane strategy assembled into one clear plan.',
    image:
      'https://images.unsplash.com/photo-1566264956508-41e8ef7f5cfc?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Park flow maps', 'Resort matching', 'Dining timing'],
  },
  {
    title: 'Universal',
    description:
      'Thrill-first itineraries that cut wait stress and balance rides, breaks, and night shows.',
    image:
      'https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Express pass guidance', 'Land priorities', 'Hotel value picks'],
  },
  {
    title: 'Cruises',
    description:
      'Ship and cabin recommendations with pre-cruise logistics so embarkation day feels easy.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Line comparison', 'Cabin strategy', 'Port-day planning'],
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

const tripStats = [
  { value: '300+', label: 'Trips Planned' },
  { value: '4.9', label: 'Average Client Rating' },
  { value: '24hr', label: 'Typical Response Window' },
]

const proofChips = [
  'Authorized planning support',
  'Promo monitoring included',
  'No extra planning fee',
]

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCelebrate, setShowCelebrate] = useState(false)

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
    <div className="min-h-screen bg-cream font-body text-ink">
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
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#services" className="nav-link">Services</a>
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
        <section className="hero-shell relative overflow-hidden text-mist">
          <p className="hero-watermark" aria-hidden="true">VIXIE DUST</p>
          <div className="hero-noise absolute inset-0" />
          <StampBadge title="Authorized" subtitle="Planner" className="hidden md:block hero-stamp" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-28 pt-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-8 md:pb-36 md:pt-20">
            <div className="relative z-10">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Trusted Vacation Planning
              </p>
              <h1 className="hero-title font-display text-5xl leading-[0.9] md:text-7xl">
                Sprinkling Magic
                <span className="block text-gold">On Every Journey</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/88 md:text-lg">
                Making your dream vacation a reality with a touch of pixie dust, clear expert guidance, and stress-free planning from start to finish.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="relative inline-flex">
                  <Button href="#intake" onClick={() => handleCtaClick('Start Planning My Trip', 'hero_primary')}>
                    Start Your Magical Journey
                  </Button>
                  <Starburst label="Free Plan" className="absolute -right-8 -top-8 hidden md:inline-flex" />
                </div>
                <Button href="#destinations" variant="light" onClick={() => handleCtaClick('View Destinations', 'hero_secondary')}>
                  View Destinations
                </Button>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Free Planning
                <span className="text-mist/80">•</span>
                Most Popular
              </div>

              <ul className="mt-4 space-y-2">
                {proofChips.map((chip) => (
                  <li key={chip} className="hero-proof-chip">
                    {chip}
                  </li>
                ))}
              </ul>

              <div className="stat-strip mt-8 grid max-w-xl grid-cols-3 gap-2">
                {tripStats.map((item) => (
                  <div key={item.label} className="stat-chip">
                    <p className="text-lg font-bold text-mist md:text-xl">{item.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-mist/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <article className="hero-photo-card">
                <img
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80"
                  alt="Family enjoying a themed travel destination"
                  className="h-[460px] w-full rounded-[1.85rem] object-cover md:h-[560px]"
                />
              </article>

              <aside className="hero-float-card">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
                  alt="Destination landscape preview"
                  className="h-28 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-plum/65">Travel Snapshot</p>
                <p className="mt-1 font-display text-2xl text-plum">Planned Better</p>
              </aside>

              <div className="hero-fox-badge">
                <img
                  src="/logo.svg"
                  alt=""
                  aria-hidden="true"
                  className="logo-mark h-10 w-10"
                />
              </div>
            </div>
          </div>

          <svg className="hero-wave" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,120 C220,210 380,20 620,90 C840,150 1050,40 1240,90 C1330,115 1400,145 1440,160 L1440,220 L0,220 Z" />
          </svg>
        </section>

        <section className="relative mx-auto -mt-14 w-full max-w-6xl px-5 md:-mt-16 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustItem title="Authorization" detail="Authorized Disney + Universal Planning Support" />
            <TrustItem title="Value" detail="Free Planning, Offer Monitoring, Concierge Guidance" />
            <TrustItem title="Service Promise" detail="Response Within 1 Business Day" />
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section className="welcome-band mx-auto mt-10 w-full max-w-6xl px-5 md:px-8">
          <div className="welcome-card rounded-[1.9rem] border border-gold/35 px-6 py-10 shadow-card md:grid md:grid-cols-[0.3fr_0.7fr] md:items-center md:gap-10 md:px-10">
            <div className="mx-auto mb-6 grid h-36 w-36 place-items-center rounded-full border border-plum/15 bg-mist md:mb-0">
              <img src="/logo.svg" alt="Vixie Dust fox mascot" className="h-28 w-28 object-contain" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-plum/70">Welcome To Vixie Dust Travels</p>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] text-plum md:text-5xl">
                Fairy-Godmother Planning
                <span className="block text-orange">For Family Adventures</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-ink/80">
                Planning Disney, cruises, and sunshine getaways is our happy place. We blend magic and logistics to build smooth, unforgettable trips.
              </p>
              <div className="mt-6">
                <Button href="#services" onClick={() => handleCtaClick('Learn More', 'welcome_band')}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="wand-divider" aria-hidden="true">✦</div>

        <section id="destinations" className="section-speckle mx-auto w-full max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pt-20">
          <StampBadge title="No Extra" subtitle="Fees" className="hidden md:block destinations-stamp" />
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Iconic Trips, With a Smart Game Plan"
            description="You get fandom-level excitement with pro-level planning. We keep the personality high and the travel chaos low."
          />

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.title}
                {...destination}
                className={index === 1 ? 'md:translate-y-6 md:rotate-[1.4deg]' : index === 2 ? 'md:-translate-y-2 md:-rotate-[1deg]' : 'md:rotate-[-0.5deg]'}
              />
            ))}
          </div>
        </section>

        <section id="merch" className="section-speckle mx-auto w-full max-w-6xl px-5 pb-8 md:px-8 md:pb-10">
          <article className="rounded-[1.6rem] border border-plum/15 bg-mist p-6 shadow-card md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="inline-block rounded-full border border-hotpink/30 bg-hotpink/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-hotpink">
                Community Merch
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-ink">A Little Merch, A Lot of Personality</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 md:text-base">
                We keep planning first, but yes, there are limited-run tees and park-day extras for clients and fans who want the full Vixie vibe.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 md:mt-0 md:w-[280px]">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
                alt="Vixie Dust branded travel merch preview"
                className="h-20 w-20 rounded-xl border border-plum/15 object-cover"
              />
              <Button href="#" variant="secondary" onClick={() => handleCtaClick('Shop Merch', 'merch_promo')}>
                Shop Merch
              </Button>
            </div>
          </article>
        </section>

        <section id="services" className="relative overflow-hidden bg-lavender/28 py-16 md:py-20">
          <div className="services-accent" />
          <div className="services-grain" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:items-start md:px-8">
            <SectionHeading
              eyebrow="Services"
              title="What Your Travel Planner Actually Handles"
              description="We are not handing you a list of links. We own the planning details so you can focus on the experience."
            />

            <div className="space-y-4">
              {services.map((service, index) => (
                <article key={service.title} className="rounded-[1.45rem] border border-plum/10 bg-cream p-5 shadow-card transition hover:-translate-y-0.5">
                  <p className="mb-2 text-2xl" aria-hidden="true">{service.icon}</p>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-hotpink">
                    Step {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-speckle rounded-[2rem] bg-lavender/24 mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <StampBadge title="Client" subtitle="Favorite" className="hidden md:block testimonials-stamp" />
          <SectionHeading
            eyebrow="Testimonials"
            title="Travelers Trust Vixie Dust to Get the Details Right"
            description="Proof that great trips are built on clear strategy, quick support, and planning that fits real families."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} className={index === 1 ? 'md:-translate-y-3' : ''} />
            ))}
          </div>
        </section>

        <section id="intake" className="mx-auto w-full max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <div className="rounded-[1.8rem] border border-plum/15 bg-mist p-6 shadow-card md:p-8">
            <SectionHeading
              eyebrow="Start Planning"
              title="Tell Us About Your Trip"
              description="This short form helps us build your first quote and planning roadmap."
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
              <div className="relative inline-flex">
                <Button href="#intake" onClick={() => handleCtaClick('Start Planning My Trip', 'final_cta_primary')}>
                  Let&apos;s Plan Your Trip ✨
                </Button>
                <Starburst label="Book Now" className="absolute -right-8 -top-8 hidden md:inline-flex" />
              </div>
              <Button href="#merch" variant="light" onClick={() => handleCtaClick('Browse Merch', 'final_cta_secondary')}>
                Browse Merch
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
