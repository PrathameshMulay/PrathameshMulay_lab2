import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { links } from '../data/skills.js'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#top" className="navbar-brand">
            Prathamesh Mulay
          </a>

          <nav className="navbar-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="navbar-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href={links.resume}
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button
              type="button"
              className="navbar-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav className={`navbar-mobile ${open ? 'open' : ''}`} aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar-mobile-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="navbar-mobile-actions">
            <a
              href={links.resume}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              View Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
