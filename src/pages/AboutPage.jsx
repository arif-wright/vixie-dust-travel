import { Link } from 'react-router-dom'

const aboutHighlights = [
  {
    title: 'Personalized Planning',
    copy: "Every trip is tailored to your family's unique needs, dreams, and budget.",
    icon: 'heart',
  },
  {
    title: 'Insider Knowledge',
    copy: 'Helpful guidance from someone who loves the magic just as much as you do.',
    icon: 'castle',
  },
  {
    title: 'Stress-Free Experience',
    copy: 'I handle the details so you can relax and enjoy the excitement.',
    icon: 'tea',
  },
  {
    title: 'Magical Memories',
    copy: 'Creating moments your family will cherish for years to come.',
    icon: 'wand',
  },
]

export function AboutPage() {
  return (
    <main className="page-main storybook-subpage about-storybook">
      <section className="about-magic-hero shell" aria-labelledby="about-title">
        <div className="about-magic-hero__copy">
          <p className="eyebrow">About Vixie Dust Travels</p>
          <h1 id="about-title">Where magical memories begin with thoughtful planning and a whole lot of heart.</h1>
          <p>
            Vixie Dust Travels was created to help families experience the excitement of a dream vacation without the
            stress and overwhelm that can come with planning every little detail alone.
          </p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="shell about-intro__grid">
          <div className="about-intro__fox">
            <img src="/logo-3.png" alt="Vixie Dust Travels fox logo" />
          </div>
          <div className="about-intro__copy">
            <p className="eyebrow">Hi there</p>
            <h2>Think of me as your fairy godmother for family vacations.</h2>
            <p>
              I created Vixie Dust Travels to help families experience the magic of vacations without the stress and
              overwhelm. As a travel advisor and a mom, I know how important these moments are and how much easier the
              planning can feel with the right help.
            </p>
            <p>
              Whether it is your first Disney trip, a relaxing cruise, or a sunny escape, I am here to handle the
              details so you can focus on what really matters: making memories together.
            </p>
            <Link to="/inquire" className="storybook-btn">
              Let&apos;s Make Magic
            </Link>
          </div>
        </div>
      </section>

      <div className="storybook-divider storybook-divider--gold" aria-hidden="true">
        <span className="storybook-divider-line" />
        <span className="storybook-divider-burst">✦</span>
        <span className="storybook-divider-line" />
      </div>

      <section className="section about-highlights">
        <div className="shell">
          <p className="storybook-section-label storybook-section-label--centered">What makes Vixie Dust special</p>
          <h2 className="storybook-centered-heading">A travel experience that feels magical and cared for.</h2>
          <div className="about-highlights__grid">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="about-highlight">
                <div className={`about-highlight__icon about-highlight__icon--${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-personal">
        <div className="shell about-personal__grid">
          <div className="about-photo-frame">
            <img src="/658027553_26629397506697359_3250149431792289541_n.jpg" alt="Travel advisor portrait" />
          </div>
          <div className="about-personal__copy">
            <p className="eyebrow">A little more about me</p>
            <h2>When I&apos;m not planning magical vacations, I&apos;m dreaming up the next one.</h2>
            <p>
              You will usually find me spending time with my family, sipping something cozy, and collecting inspiration
              for future adventures. Travel has always been a passion of mine, and helping other families create
              joyful, unforgettable memories is a huge part of why I do this.
            </p>
            <p className="about-signoff">Let&apos;s create something magical together.</p>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="shell about-cta__inner">
          <div>
            <p className="eyebrow">Ready to begin?</p>
            <h2>Your next magical adventure is just a sprinkle away.</h2>
          </div>
          <Link to="/inquire" className="storybook-btn">
            Start Your Magical Journey
          </Link>
        </div>
      </section>
    </main>
  )
}
