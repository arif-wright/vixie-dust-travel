export function TestimonialCard({ quote, name, trip }) {
  return (
    <figure className="rounded-[1.55rem] border border-plum/10 bg-mist p-6 shadow-card">
      <blockquote className="text-sm leading-relaxed text-ink/85">"{quote}"</blockquote>
      <figcaption className="mt-5 border-t border-plum/10 pt-4">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-plum/70">{trip}</p>
      </figcaption>
    </figure>
  )
}
