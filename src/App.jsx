import { Button } from './components/Button'
import { DestinationCard } from './components/DestinationCard'
import { SectionHeading } from './components/SectionHeading'
import { Starburst } from './components/Starburst'
import { TestimonialCard } from './components/TestimonialCard'
import { TrustItem } from './components/TrustItem'

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
    title: 'Custom Itinerary Design',
    text: 'We build day-by-day plans around your priorities, mobility needs, and realistic pace.',
  },
  {
    title: 'Booking + Offer Monitoring',
    text: 'We manage reservations and track promotions so your trip stays optimized as prices shift.',
  },
  {
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

function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <header className="sticky top-0 z-50 border-b border-mist/15 bg-plum/80 text-mist backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold/40 bg-mist/15">
              <img src="/vixie-fox-mark.svg" alt="Vixie Dust fox logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-mist">Vixie Dust</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/85">Travel Agency</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-mist/90 md:flex">
            <a href="#destinations" className="transition hover:text-gold">Destinations</a>
            <a href="#services" className="transition hover:text-gold">Services</a>
            <a href="#testimonials" className="transition hover:text-gold">Testimonials</a>
          </nav>

          <Button href="#start" className="hidden md:inline-flex">
            Start Planning My Trip
          </Button>
        </div>
      </header>

      <main>
        <section className="hero-shell relative overflow-hidden text-mist">
          <div className="hero-noise absolute inset-0" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-28 pt-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-8 md:pb-36 md:pt-20">
            <div className="relative z-10">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Trusted Vacation Planning
              </p>
              <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
                Start Planning
                <span className="block text-gold">Your Trip</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/88 md:text-lg">
                Stress-free Disney, Universal, and cruise planning with expert strategy, free support, and a clear path from quote to takeoff.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="relative inline-flex">
                  <Button href="#start">Start Planning My Trip</Button>
                  <Starburst label="Free Plan" className="absolute -right-8 -top-8 hidden md:inline-flex" />
                </div>
                <Button href="#destinations" variant="light">
                  View Destinations
                </Button>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Free Planning
                <span className="text-mist/80">•</span>
                Most Popular
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
                <img src="/vixie-fox-mark.svg" alt="" aria-hidden="true" className="h-10 w-10" />
              </div>
            </div>
          </div>

          <svg className="hero-wave" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,120 C220,210 380,20 620,90 C840,150 1050,40 1240,90 C1330,115 1400,145 1440,160 L1440,220 L0,220 Z" />
          </svg>
        </section>

        <section className="relative mx-auto -mt-14 w-full max-w-6xl px-5 md:-mt-16 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustItem title="Authority" detail="Authorized Planner" />
            <TrustItem title="Cost" detail="Free Planning Services" />
            <TrustItem title="Social Proof" detail="Trusted by Families" />
          </div>
        </section>

        <section id="destinations" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pt-20">
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
                className={index === 1 ? 'md:translate-y-6 md:rotate-[1.2deg]' : index === 2 ? 'md:-translate-y-1 md:-rotate-[0.8deg]' : ''}
              />
            ))}
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-mist py-16 md:py-20">
          <div className="services-accent" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:items-start md:px-8">
            <SectionHeading
              eyebrow="Services"
              title="What Your Travel Planner Actually Handles"
              description="We are not handing you a list of links. We own the planning details so you can focus on the experience."
            />

            <div className="space-y-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-[1.45rem] border border-plum/10 bg-cream p-5 shadow-card">
                  <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/80">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="Travelers Trust Vixie Dust to Get the Details Right"
            description="Proof that great trips are built on clear strategy, quick support, and planning that fits real families."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="start" className="final-cta relative overflow-hidden py-16 text-mist md:py-20">
          <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
            <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Ready To Lock It In
            </p>
            <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Start Planning My Trip</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist/85">
              Tell us your dates, priorities, and budget. We will build your best-fit plan and guide every next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="relative inline-flex">
                <Button href="#">Start Planning My Trip</Button>
                <Starburst label="Book Now" className="absolute -right-8 -top-8 hidden md:inline-flex" />
              </div>
              <Button href="#destinations" variant="light">
                View Destinations
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
