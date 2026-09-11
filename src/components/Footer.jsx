import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import { links } from '../data/skills.js'
import './Footer.css'

const YEAR = 2026

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Prathamesh Mulay</div>
            <div className="footer-tagline">Data Scientist | AI &amp; Analytics | Product</div>
          </div>

          <div className="footer-links">
            <a href={links.github} className="icon-link" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={links.linkedin} className="icon-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href={links.email} className="icon-link" aria-label="Email">
              <Mail size={17} />
            </a>
            <a href={links.resume} className="icon-link" target="_blank" rel="noreferrer" aria-label="Resume">
              <FileText size={17} />
            </a>
          </div>

          <div className="footer-note">
            © {YEAR} Prathamesh Mulay. Built with React &amp; Vite.
          </div>
        </div>
      </div>
    </footer>
  )
}
