export function Starburst({ label, className = '' }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30)

  return (
    <span className={`starburst relative inline-flex h-[4.6rem] w-[4.6rem] items-center justify-center ${className}`}>
      {rays.map((deg) => (
        <span key={deg} className="starburst-ray" style={{ '--ray-rotation': `${deg}deg` }} />
      ))}
      <span className="starburst-core">
        <span className="starburst-label">{label}</span>
      </span>
      <span className="starburst-dot starburst-dot-one" />
      <span className="starburst-dot starburst-dot-two" />
    </span>
  )
}
