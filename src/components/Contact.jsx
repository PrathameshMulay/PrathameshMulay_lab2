import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import { links } from '../data/skills.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contact-panel">
          <h2 className="contact-heading">Let&apos;s Build Something Useful.</h2>
          <p className="contact-text">
            I&apos;m interested in opportunities across Data Science, AI/ML, Analytics, and
            Product.
          </p>
          <div className="contact-actions">
            <a href={links.email} className="btn btn-primary">
              <Mail size={18} />
              Email Me
            </a>
            <a href={links.linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={links.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a href={links.resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
