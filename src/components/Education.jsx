import { GraduationCap } from 'lucide-react'
import { education, approach } from '../data/skills.js'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-grid">
          {education.map((edu) => (
            <div className="card education-card" key={edu.id}>
              <span className="education-icon" aria-hidden="true">
                <GraduationCap size={22} />
              </span>
              <div>
                <div className="education-school">{edu.school}</div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-focus">{edu.focus}</div>
                <div className="education-period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="approach-heading section-header">
          <span className="eyebrow">Approach</span>
          <h2 className="section-title">How I Approach Problems</h2>
        </div>

        <div className="approach-grid">
          {approach.map((step) => (
            <div className="card approach-card" key={step.number}>
              <div className="approach-number">{step.number}</div>
              <div className="approach-title">{step.title}</div>
              <p className="approach-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
