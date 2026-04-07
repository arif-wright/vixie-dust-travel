export function TestimonialCard({ quote, name, trip, className = '' }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

  return (
    <figure className={`testimonial-card rounded-[1.55rem] border border-plum/10 bg-mist p-6 shadow-card ${className}`}>
      <span className="testimonial-mark" aria-hidden="true">"</span>
      <blockquote className="relative z-10 text-sm leading-relaxed text-ink/85">"{quote}"</blockquote>
      <figcaption className="mt-5 border-t border-plum/10 pt-4">
        <div className="flex items-center gap-3">
          <span className="testimonial-avatar">{initials}</span>
          <div>
            <p className="font-semibold text-ink">{name}</p>
            <p className="text-sm text-plum/70">{trip}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
