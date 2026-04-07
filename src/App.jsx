import { Button } from './components/Button'
import { DestinationCard } from './components/DestinationCard'
import { SectionHeading } from './components/SectionHeading'
import { TestimonialCard } from './components/TestimonialCard'
import { TrustItem } from './components/TrustItem'

const destinations = [
  {
    title: 'Disney Vacations',
    description:
      'Walt Disney World, Disneyland, and Disney Cruise Line trips designed around your budget, pace, and must-do moments.',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Park strategy that saves hours', 'Dining + resort matching', 'Family-first pacing'],
  },
  {
    title: 'Universal Adventures',
    description:
      'From thrill rides to wizarding worlds, we build a Universal plan that keeps you ahead of crowds and on top of perks.',
    image:
      'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Express pass guidance', 'Best-time park routing', 'Hotel + ticket optimization'],
  },
  {
    title: 'Cruise Escapes',
    description:
      'Ocean and river itineraries with clear recommendations, room category guidance, and stress-free logistics from booking to boarding.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Line and ship matching', 'Onboard credit opportunities', 'Shore day planning support'],
  },
]

const testimonials = [
  {
    quote:
      'Every detail was handled. We walked into Disney feeling prepared instead of overwhelmed, and we saved more than expected.',
    name: 'The Romero Family',
    trip: 'Disney World Spring Break',
  },
  {
    quote:
      'Vixie Dust made Universal and our cruise feel effortless. Quick answers, smart suggestions, and zero pressure.',
    name: 'Jordan & Casey M.',
    trip: 'Universal Orlando + Bahamas Cruise',
  },
  {
    quote:
      'We trusted the process and it paid off. Dining, transfers, and park days were perfectly synced for our kids.',
    name: 'Amara T.',
    trip: 'Multi-Generation Disney Trip',
  },
]

const services = [
  {
    title: 'Trip Design',
    text: 'We recommend destinations, resorts, and itineraries that fit your style, travel season, and budget.',
  },
  {
    title: 'Booking & Logistics',
    text: 'We handle reservations, monitor promotions, and coordinate key details so your plan stays smooth.',
  },
  {
    title: 'Pre-Travel Strategy',
    text: 'You get personalized planning notes, timelines, and in-park tips that reduce stress and maximize value.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <header className="sticky top-0 z-40 border-b border-plum/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border-2 border-plum bg-mist">
              <img src="/vixie-fox-mark.svg" alt="Vixie Dust fox logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <p className="font-display text-xl leading-none text-plum">Vixie Dust</p>
              <p className="text-xs uppercase tracking-[0.2em] text-plum/70">Travel</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/85 md:flex">
            <a href="#destinations" className="hover:text-plum">Destinations</a>
            <a href="#services" className="hover:text-plum">Services</a>
            <a href="#testimonials" className="hover:text-plum">Testimonials</a>
          </nav>
          <Button href="#start" className="hidden md:inline-flex">
            Start Planning
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-plum text-mist">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-24">
            <div className="relative z-10">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Trusted Vacation Planning
              </p>
              <h1 className="font-display text-4xl leading-tight md:text-6xl">
                Start Planning Your Trip
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/90 md:text-lg">
                Skip the overwhelm and book with confidence. We design Disney, Universal, and cruise vacations that save you time, reduce stress, and maximize every dollar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#start" className="!bg-orange hover:!bg-orange-soft">
                  Start Planning My Trip
                </Button>
                <Button href="#destinations" variant="secondary" className="!border-gold/50 !bg-transparent !text-mist hover:!bg-mist hover:!text-plum">
                  View Destinations
                </Button>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl border border-mist/20 bg-mist/10 p-3">
                  <p className="font-semibold">Authorized Planner</p>
                </div>
                <div className="rounded-xl border border-mist/20 bg-mist/10 p-3">
                  <p className="font-semibold">Free Planning</p>
                </div>
                <div className="col-span-2 rounded-xl border border-mist/20 bg-mist/10 p-3 sm:col-span-1">
                  <p className="font-semibold">Trusted by Families</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="absolute -left-6 -top-6 h-16 w-16 animate-floaty rounded-full border border-gold/40 bg-gold/20 blur-[1px]" />
              <div className="absolute -right-5 top-14 h-10 w-10 rounded-full bg-orange/60" />
              <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80"
                alt="Family travelers walking through a destination"
                className="h-[420px] w-full rounded-[2rem] border border-mist/25 object-cover shadow-card md:h-[520px]"
              />

              <div className="absolute -bottom-5 left-4 rounded-2xl border border-mist/30 bg-plum-soft/90 px-4 py-3 shadow-card backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Planning Support</p>
                <p className="mt-1 text-sm font-semibold text-mist">From first quote to final boarding pass</p>
              </div>

              <div className="absolute -bottom-7 right-5 h-20 w-20 overflow-hidden rounded-full border-2 border-mist/50 bg-orange/90 p-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-mist animate-floaty">
                <img src="/vixie-fox-mark.svg" alt="" aria-hidden="true" className="h-full w-full object-contain opacity-85" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            <TrustItem title="Authority" detail="Authorized Planner" />
            <TrustItem title="Cost" detail="Free Planning Services" />
            <TrustItem title="Proof" detail="Trusted by Families" />
          </div>
        </section>

        <section id="destinations" className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Your Favorite Trips, Planned Better"
            description="From iconic theme park vacations to smooth sailing escapes, every itinerary is customized for your crew and travel style."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </section>

        <section id="services" className="bg-mist py-14 md:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-start md:px-8">
            <SectionHeading
              eyebrow="What We Handle"
              title="A Planner Who Actually Takes Work Off Your Plate"
              description="We combine destination expertise with concierge-style support so your trip feels clear, exciting, and fully under control."
            />

            <div className="space-y-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl border border-plum/10 bg-cream p-5 shadow-card">
                  <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Travelers Who Wanted Less Stress"
            description="Real feedback from families and couples who booked with Vixie Dust Travel and felt supported every step of the way."
            align="center"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="start" className="relative overflow-hidden bg-plum py-16 text-mist md:py-20">
          <div className="absolute right-8 top-6 h-16 w-16 text-gold/60">*</div>
          <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-8">
            <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Ready When You Are
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Start Planning My Trip</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist/85">
              Tell us what kind of vacation you want, and we’ll build the roadmap. No guesswork, no pressure, just expert planning built around you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#" className="!bg-orange hover:!bg-orange-soft">
                Start Planning My Trip
              </Button>
              <Button href="#destinations" variant="secondary" className="!border-gold/50 !bg-transparent !text-mist hover:!bg-mist hover:!text-plum">
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
