export function DestinationCard({ title, description, image, highlights }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-plum/10 bg-mist shadow-card transition duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={`${title} destination preview`}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="space-y-4 p-6">
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/80">{description}</p>
        <ul className="space-y-2 text-sm text-plum">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
