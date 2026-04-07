export function DestinationCard({ title, description, image, highlights, className = '' }) {
  return (
    <article className={`group overflow-hidden rounded-[1.55rem] border border-plum/10 bg-mist shadow-card transition duration-300 hover:-translate-y-1 ${className}`}>
      <div className="relative bg-gradient-to-b from-lavender/55 via-blush/20 to-mist px-6 pb-6 pt-5 text-center">
        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-gold/40 bg-cream p-1 shadow-sm">
          <img
            src={image}
            alt={`${title} destination preview`}
            className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="space-y-4 bg-gradient-to-b from-mist to-cream p-6 text-center">
        <h3 className="font-display text-[2rem] leading-tight text-plum">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/80">{description}</p>
        <ul className="space-y-2 text-sm text-plum/90 text-left">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {item}
            </li>
          ))}
        </ul>
        <button type="button" className="btn-primary !px-5 !py-2 !text-sm">
          Learn More
        </button>
      </div>
    </article>
  )
}
