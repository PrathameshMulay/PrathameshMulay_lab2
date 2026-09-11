import { useState } from 'react'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { projects } from '../data/projects.js'
import ProjectModal from './ProjectModal.jsx'
import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            Data, AI, and analytics projects spanning natural language interfaces, large-scale
            pipelines, and applied machine learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <button
              type="button"
              className="card project-card"
              key={project.id}
              onClick={() => setActiveProject(project)}
            >
              <div className="project-card-top">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlight && (
                <div className="project-highlight">
                  <TrendingUp size={16} />
                  {project.highlight}
                </div>
              )}

              <div className="project-card-footer">
                <span className="project-view-link">
                  View Project <ArrowUpRight size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
