import { Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/experience.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
          <p className="section-subtitle">
            Hands-on experience across data engineering, analytics, and AI-enabled reporting.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article className="card timeline-item" key={job.id}>
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <div className="timeline-company">{job.company}</div>
                </div>
                <div className="timeline-meta">
                  <span>
                    <Calendar size={14} /> {job.period}
                  </span>
                  <span>
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>
              </div>
              <ul className="timeline-list">
                {job.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
