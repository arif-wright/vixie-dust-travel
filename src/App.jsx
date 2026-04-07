import { useEffect, useRef, useState } from 'react'
import { Button } from './components/Button'
import { trackEvent } from './lib/analytics'

const navItems = [
  { id: 'adventure', label: 'Adventure' },
  { id: 'path', label: 'Journey' },
  { id: 'proof', label: 'Stories' },
  { id: 'consultation', label: 'Consult' },
]

const adventurePortals = [
  {
    id: 'disney',
    eyebrow: 'Park Story',
    title: 'Disney Vacations',
    text: 'Theme park anticipation, resort atmosphere, and polished planning that keeps the wonder high without turning the trip into homework.',
    image:
      'https://images.pexels.com/photos/8184000/pexels-photo-8184000.jpeg?auto=compress&cs=tinysrgb&w=1400',
    accent: 'Rope drop to fireworks',
    className: 'portal-card--castle',
  },
  {
    id: 'signature',
    eyebrow: 'Signature Energy',
    title: 'A Vacation That Feels Curated From The Start',
    text: 'Not just where you stay or what you book, but the rhythm, anticipation, and atmosphere of the whole trip.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80',
    accent: 'Boutique, fandom-aware, and polished',
    className: 'portal-card--signature',
  },
  {
    id: 'cruise',
    eyebrow: 'Ocean Story',
    title: 'Magical Cruises',
    text: 'Cruise recommendations, embarkation guidance, and port-day rhythm for travelers who want the sailing to feel elegant, easy, and exciting.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80',
    accent: 'Deckside calm, zero scramble',
    className: 'portal-card--cruise',
  },
  {
    id: 'sun',
    eyebrow: 'Sun Story',
    title: 'Sunny Getaways',
    text: 'Warm-weather trips with more personality, better fit, and less generic searching.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
    accent: 'A little glamorous, a lot easier',
    className: 'portal-card--sun',
  },
]

const pathMoments = [
  {
    title: 'The spark',
    text: 'You bring the dream, the dates, and the feeling you want the trip to have.',
  },
  {
    title: 'The match',
    text: 'Vixie Dust narrows the best options and filters the noise into clear recommendations.',
  },
  {
    title: 'The map',
    text: 'Booking, timing, and practical details get shaped into a plan that actually flows.',
  },
  {
    title: 'The takeoff',
    text: 'You head out with more excitement, more confidence, and far fewer tabs open.',
  },
]

const layeredQuotes = [
  {
    quote:
      'We stopped second-guessing every decision. It felt like someone understood the kind of trip we wanted, not just the destination.',
    name: 'Alyssa R.',
    trip: 'Disney + Resort Split Stay',
    className: 'quote-layer--one',
  },
  {
    quote:
      'The recommendations felt personal instead of generic. We got real help and still kept that excited pre-trip feeling.',
    name: 'The Nguyen Family',
    trip: 'Theme Park Vacation Planning',
    className: 'quote-layer--two',
  },
  {
    quote:
      'Our cruise felt effortless. Cabin choice, timing, and embarkation all clicked in a way they never have before.',
    name: 'Marcus and Tia L.',
    trip: '7-Night Caribbean Cruise',
    className: 'quote-layer--three',
  },
]

const trustSignals = [
  'Planning services included',
  'Quick thoughtful replies',
  'Personalized travel guidance',
]

function App() {
  const [activeSection, setActiveSection] = useState('adventure')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCelebrate, setShowCelebrate] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const sparkleLayerRef = useRef(null)
  const heroRef = useRef(null)
  const adventureRef = useRef(null)
  const pathRef = useRef(null)
  const proofRef = useRef(null)
  const consultationRef = useRef(null)

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
        rootMargin: '-24% 0px -46% 0px',
        threshold: [0.2, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.16,
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let frameId = 0

    const updateParallax = () => {
      frameId = 0

      const hero = heroRef.current
      const adventure = adventureRef.current

      if (hero) {
        const rect = hero.getBoundingClientRect()
        const shift = Math.max(-28, Math.min(28, rect.top * -0.045))
        hero.style.setProperty('--hero-shift', `${shift}px`)
      }

      if (adventure) {
        const rect = adventure.getBoundingClientRect()
        const shift = Math.max(-22, Math.min(22, rect.top * -0.03))
        adventure.style.setProperty('--adventure-shift', `${shift}px`)
      }

      const path = pathRef.current
      if (path) {
        const rect = path.getBoundingClientRect()
        const shift = Math.max(-18, Math.min(18, rect.top * -0.024))
        path.style.setProperty('--scene-shift', `${shift}px`)
      }

      const proof = proofRef.current
      if (proof) {
        const rect = proof.getBoundingClientRect()
        const shift = Math.max(-16, Math.min(16, rect.top * -0.02))
        proof.style.setProperty('--scene-shift', `${shift}px`)
      }

      const consultation = consultationRef.current
      if (consultation) {
        const rect = consultation.getBoundingClientRect()
        const shift = Math.max(-14, Math.min(14, rect.top * -0.018))
        consultation.style.setProperty('--scene-shift', `${shift}px`)
      }
    }

    const onScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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
            <p className="loading-text">Stepping Into The Story...</p>
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
              <p className="brand-subtitle">Travel Story Concierge</p>
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
            onClick={() => handleCtaClick('Begin Your Vacation Story', 'header_desktop')}
          >
            Begin Your Vacation Story
          </Button>

          <Button
            href="#consultation"
            className="header-cta sm:hidden !px-4 !text-xs"
            onClick={() => handleCtaClick('Begin Story', 'header_mobile')}
          >
            Begin
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
        <section ref={heroRef} className="invitation-hero">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-orb hero-orb--left" aria-hidden="true" />
          <div className="hero-orb hero-orb--right" aria-hidden="true" />
          <div className="hero-particles" aria-hidden="true" />
          <div className="hero-shimmer" aria-hidden="true" />

          <div className="hero-frame">
            <div className="hero-depth hero-depth--rear" aria-hidden="true" />
            <div className="hero-depth hero-depth--front" aria-hidden="true" />

            <div className="hero-copy reveal-up" data-reveal>
              <p className="hero-kicker">The invitation</p>
              <h1 className="hero-title">
                The trip should start
                <span className="block">the second you land here.</span>
              </h1>
              <p className="hero-subtext">
                Vixie Dust Travel designs Disney vacations, cruises, and immersive escapes that feel cinematic, personal, and beautifully considered from the very first idea.
              </p>

              <div className="hero-actions">
                <Button
                  href="#consultation"
                  className="hero-primary-cta"
                  onClick={() => handleCtaClick('Start The Story', 'hero_primary')}
                >
                  Start The Story
                </Button>
                <Button
                  href="#adventure"
                  variant="secondary"
                  className="hero-secondary-cta"
                  onClick={() => handleCtaClick('Choose Your Adventure', 'hero_secondary')}
                >
                  Choose Your Adventure
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

            <div className="hero-stage reveal-up" data-reveal style={{ '--reveal-delay': '140ms' }}>
              <div className="hero-stage-image">
                <img
                  src="https://images.pexels.com/photos/8184000/pexels-photo-8184000.jpeg?auto=compress&cs=tinysrgb&w=1800"
                  alt="Walt Disney and Mickey Mouse statue in front of Cinderella Castle at Walt Disney World"
                  className="h-full w-full object-cover object-[52%_40%]"
                />
              </div>

              <aside className="hero-ticket hero-ticket--main">
                <p className="hero-ticket-label">Vixie Dust effect</p>
                <p className="hero-ticket-text">Less decision fatigue. More anticipation, momentum, and arrival energy.</p>
              </aside>

              <aside className="hero-ticket hero-ticket--route">
                <p className="hero-ticket-label">What this feels like</p>
                <p className="hero-ticket-text">Travel planning that understands the atmosphere, not just the logistics.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="scene-threshold" aria-hidden="true">
          <div className="threshold-line" />
          <div className="threshold-copy">Step past the invitation</div>
        </section>

        <section id="adventure" ref={adventureRef} className="adventure-scene">
          <div className="scene-ambient scene-ambient--adventure" aria-hidden="true" />
          <div className="scene-shell scene-shell--wide">
            <div className="section-heading section-heading--split reveal-up" data-reveal>
              <p className="section-kicker">Choose your adventure</p>
              <div>
                <h2 className="section-title">A collage of vacation moods instead of a list of services.</h2>
                <p className="section-copy">
                  Every portal is a different kind of anticipation. The point is not just where you go, but how the whole trip feels once it starts taking shape.
                </p>
              </div>
            </div>

            <div className="portal-collage">
              <div className="portal-light-trail" aria-hidden="true" />
              {adventurePortals.map((portal, index) => (
                <article
                  key={portal.id}
                  className={`portal-card ${portal.className} reveal-up`}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` }}
                >
                  <div className="portal-image">
                    <img src={portal.image} alt={portal.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="portal-overlay">
                    <p className="portal-eyebrow">{portal.eyebrow}</p>
                    <h3>{portal.title}</h3>
                    <p className="portal-accent">{portal.accent}</p>
                    <p className="portal-text">{portal.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="path" ref={pathRef} className="journey-path-scene section-overlap-top">
          <div className="scene-ambient scene-ambient--path" aria-hidden="true" />
          <div className="scene-shell">
            <div className="section-heading section-heading--center reveal-up" data-reveal>
              <p className="section-kicker">From dream to departure</p>
              <h2 className="section-title">A travel path that flows like a story arc, not a checklist.</h2>
              <p className="section-copy">
                The process is designed to feel directional and calm. Each turn takes you further into the vacation and further away from the usual planning chaos.
              </p>
            </div>

            <div className="journey-flow">
              <div className="journey-path-line" aria-hidden="true" />
              {pathMoments.map((moment, index) => (
                <article
                  key={moment.title}
                  className={`journey-node journey-node--${index + 1} reveal-up`}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` }}
                >
                  <span className="journey-node-index">0{index + 1}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" ref={proofRef} className="proof-scene section-overlap-top">
          <div className="scene-ambient scene-ambient--proof" aria-hidden="true" />
          <div className="scene-shell proof-layout">
            <div className="proof-copy reveal-up" data-reveal>
              <p className="section-kicker">Social proof</p>
              <h2 className="section-title">Real travelers describing the feeling we are actually trying to create.</h2>
              <p className="section-copy">
                Calm. Excitement. Less overthinking. More trust. The best feedback is rarely about one booking detail. It&apos;s about how the whole experience felt in motion.
              </p>
            </div>

            <div className="quote-editorial">
              {layeredQuotes.map((quote, index) => (
                <figure
                  key={quote.name}
                  className={`quote-layer ${quote.className} reveal-up`}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 110}ms` }}
                >
                  <blockquote>{quote.quote}</blockquote>
                  <figcaption>
                    <strong>{quote.name}</strong>
                    <span>{quote.trip}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="consultation" ref={consultationRef} className="decision-scene section-overlap-top">
          <div className="decision-backdrop" aria-hidden="true" />
          <div className="scene-ambient scene-ambient--decision" aria-hidden="true" />
          <div className="scene-shell decision-layout">
            <div className="decision-copy reveal-up" data-reveal>
              <p className="section-kicker section-kicker--light">The decision moment</p>
              <h2 className="decision-title">If the trip matters, the planning should feel elevated too.</h2>
              <p className="decision-text">
                Tell Vixie Dust Travel what kind of escape you&apos;re imagining, and we&apos;ll help shape it into something memorable, navigable, and worth looking forward to.
              </p>
            </div>

            <div className="decision-form-frame reveal-up" data-reveal style={{ '--reveal-delay': '120ms' }}>
              <form className="decision-form" onSubmit={handleLeadSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-mist">
                    Full name
                  </label>
                  <input id="fullName" name="fullName" required className="input-field" autoComplete="name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-mist">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className="input-field" autoComplete="email" />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-mist">
                    What kind of trip?
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
                  <label htmlFor="travelWindow" className="block text-sm font-semibold text-mist">
                    Travel window
                  </label>
                  <input id="travelWindow" name="travelWindow" required className="input-field" placeholder="Example: October 2026" />
                </div>

                <div>
                  <label htmlFor="tripType" className="block text-sm font-semibold text-mist">
                    Trip energy
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
                  <label htmlFor="budget" className="block text-sm font-semibold text-mist">
                    Budget thoughts
                  </label>
                  <input id="budget" name="budget" className="input-field" placeholder="Optional" />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-semibold text-mist">
                    What kind of vacation story are you after?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    className="input-field min-h-[140px] resize-y"
                    placeholder="Destinations, must-have moments, celebration details, or anything you want the trip to feel like"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                  <button type="submit" className="btn-primary" onClick={() => handleCtaClick('Begin My Consultation', 'consultation_form')}>
                    Begin My Consultation
                  </button>
                  <p className="text-sm text-mist/70">By submitting, you agree to be contacted about your vacation plans.</p>
                </div>
              </form>

              {isSubmitted ? (
                <p role="status" className={`mt-4 rounded-xl border border-green-700/25 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 ${showCelebrate ? 'form-success' : ''}`}>
                  Thanks. Your vacation story is in our queue, and we&apos;ll follow up soon.
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
