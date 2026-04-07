export function Starburst({ label, className = '' }) {
  return (
    <span className={`starburst ${className}`}>
      <svg viewBox="0 0 100 100" className="starburst-icon" aria-hidden="true">
        <polygon
          className="starburst-shape"
          points="50,0 56,38 100,50 56,62 50,100 44,62 0,50 44,38"
        />
        <polygon
          className="starburst-shape"
          points="15,15 45,43 50,25 55,43 85,15 57,45 75,50 57,55 85,85 55,57 50,75 45,57 15,85 43,55 25,50 43,45"
        />
        <polygon
          className="starburst-center"
          points="50,42 52,48 58,50 52,52 50,58 48,52 42,50 48,48"
        />
        <polygon
          className="starburst-center"
          points="44,44 49,47 50,42 51,47 56,44 53,49 58,50 53,51 56,56 51,53 50,58 49,53 44,56 47,51 42,50 47,49"
        />
      </svg>
      <span className="starburst-label">
        {label}
      </span>
    </span>
  )
}
