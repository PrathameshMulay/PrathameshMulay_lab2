import { skills } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools &amp; Technologies</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="card skill-card" key={group.category}>
              <div className="skill-card-title">{group.category}</div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
