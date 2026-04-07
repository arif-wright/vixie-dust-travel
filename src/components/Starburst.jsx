export function Starburst({ label, className = '' }) {
  return (
    <span
      className={`starburst inline-flex h-16 w-16 items-center justify-center text-center text-[10px] font-bold uppercase tracking-[0.08em] text-plum ${className}`}
    >
      {label}
    </span>
  )
}
