export function TrustItem({ title, detail }) {
  return (
    <div className="rounded-2xl border border-plum/10 bg-mist px-5 py-4 text-center shadow-card md:text-left">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-plum/60">{title}</p>
      <p className="mt-2 text-base font-semibold text-ink">{detail}</p>
    </div>
  )
}
