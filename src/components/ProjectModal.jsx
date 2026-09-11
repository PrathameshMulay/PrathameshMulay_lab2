import { useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const { caseStudy } = project

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <div>
            <span className="modal-category">{project.category}</span>
            <h3 className="modal-title" id="project-modal-title">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <section>
            <div className="modal-section-title">Problem</div>
            <p className="modal-section-text">{caseStudy.problem}</p>
          </section>

          <section>
            <div className="modal-section-title">Solution</div>
            <p className="modal-section-text">{caseStudy.solution}</p>
          </section>

          <section>
            <div className="modal-section-title">Architecture</div>
            <div className="modal-architecture">
              {project.architecture.map((step, idx) => (
                <span key={step} style={{ display: 'contents' }}>
                  <span className="modal-architecture-step">{step}</span>
                  {idx < project.architecture.length - 1 && (
                    <ArrowRight size={14} className="modal-architecture-arrow" />
                  )}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="modal-section-title">Technical Approach</div>
            <p className="modal-section-text">{caseStudy.technicalApproach}</p>
          </section>

          {caseStudy.governance && (
            <section>
              <div className="modal-section-title">Governance</div>
              <p className="modal-section-text">{caseStudy.governance}</p>
            </section>
          )}

          <section>
            <div className="modal-section-title">Results / Expected Value</div>
            <p className="modal-section-text">{caseStudy.results}</p>
          </section>

          <section>
            <div className="modal-section-title">Technology</div>
            <div className="modal-tags">
              {caseStudy.technology.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
