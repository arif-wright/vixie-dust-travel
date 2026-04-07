export function Button({ children, href = '#', variant = 'primary', className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream'

  const styles = {
    primary:
      'bg-orange text-mist shadow-card hover:-translate-y-0.5 hover:bg-orange-soft focus-visible:ring-orange',
    secondary:
      'border border-plum/35 bg-mist text-plum hover:border-plum hover:bg-plum hover:text-mist focus-visible:ring-plum',
    light:
      'border border-mist/30 bg-mist/10 text-mist backdrop-blur hover:bg-mist hover:text-plum focus-visible:ring-mist',
  }

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  )
}
