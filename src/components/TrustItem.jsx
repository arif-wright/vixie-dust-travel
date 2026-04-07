export function TrustItem({ title, detail }) {
  return (
    <div className="trust-item angled-card border border-plum/10 bg-mist px-5 py-4 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-plum/65">{title}</p>
      <p className="mt-2 text-base font-semibold text-ink">{detail}</p>
    </div>
  )
}
