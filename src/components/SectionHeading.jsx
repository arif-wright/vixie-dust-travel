export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 inline-block rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">{description}</p>
    </header>
  )
}
