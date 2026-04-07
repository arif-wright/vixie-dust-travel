export function StampBadge({ title, subtitle, className = '' }) {
  return (
    <aside className={`stamp-badge ${className}`} aria-hidden="true">
      <span className="stamp-cancel">VIXIE AIR MAIL</span>
      <p className="stamp-title">{title}</p>
      <p className="stamp-subtitle">{subtitle}</p>
    </aside>
  )
}
