import { useEffect, useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/shop', label: 'Shop' },
  { to: '/resources', label: 'Resources' },
  { to: '/inquire', label: 'Inquire' },
]

export function SiteLayout() {
  const pointerTrailRef = useRef(null)

  useEffect(() => {
    const layer = pointerTrailRef.current
    if (!layer) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return undefined

    let lastTime = 0
    const minInterval = 30

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('span')
      sparkle.className = 'pointer-sparkle'

      const size = 6 + Math.random() * 8
      sparkle.style.left = `${x - size / 2}px`
      sparkle.style.top = `${y - size / 2}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--sparkle-rotate', `${Math.random() * 70 - 35}deg`)
      sparkle.style.setProperty('--sparkle-drift-x', `${Math.random() * 18 - 9}px`)
      sparkle.style.setProperty('--sparkle-drift-y', `${Math.random() * 16 - 8}px`)
      sparkle.style.animationDuration = `${520 + Math.random() * 340}ms`

      layer.appendChild(sparkle)
      window.setTimeout(() => sparkle.remove(), 980)
    }

    const handleMove = (event) => {
      const now = performance.now()
      if (now - lastTime < minInterval) return
      lastTime = now
      spawnSparkle(event.clientX, event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="site-shell">
      <div ref={pointerTrailRef} className="pointer-sparkle-layer" aria-hidden="true" />

      <header className="topbar">
        <NavLink to="/" className="brand-lockup">
          <img src="/logo-face.svg" alt="" aria-hidden="true" className="brand-mark" />
          <div>
            <span className="brand-name">Vixie Dust Travel</span>
            <span className="brand-tag">Travel planning + merch + client care</span>
          </div>
        </NavLink>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <p className="eyebrow">Vixie Dust Travel</p>
            <h2>Build trust, capture leads, and create a brand clients want to belong to.</h2>
          </div>
          <div className="footer-links">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/inquire">Start an inquiry</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
