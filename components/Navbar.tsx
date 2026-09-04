'use client'

import { useState } from 'react'

const links = [
  { label: 'Services', href: '/services', homeHref: '#services' },
  { label: 'Work', href: '/work', homeHref: '#work' },
  { label: 'Process', href: '/process', homeHref: '#process' },
  { label: 'About', href: '/about', homeHref: '#about' },
  { label: 'FAQ', href: '/faq', homeHref: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Sunny Software Solutions home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Sunny<span className="brand-accent"> Software</span></span>
        </a>

        <div className="desktop-nav">
          <a className="nav-link active" href="#top">Home</a>
          {links.map((link) => <a className="nav-link" href={link.href} key={link.href}>{link.label}</a>)}
        </div>

        <div className="nav-actions">
          <a className="nav-email" href="mailto:hello@sunnysoftware.dev">hello@sunnysoftware.dev</a>
          <a className="button button-small button-primary" href="/contact">Start a project <span aria-hidden="true">↗</span></a>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </nav>
      {open && <div className="mobile-menu" id="mobile-menu">
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        {links.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="mailto:hello@sunnysoftware.dev" onClick={() => setOpen(false)}>Email us <span aria-hidden="true">↗</span></a>
      </div>}
    </header>
  )
}
