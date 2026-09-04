import { useEffect, useState } from 'react'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import { ArrowIcon, CloseIcon } from './icons'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">
            Mes <span className="section-title-accent">projets</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="section-subtitle">
            Cliquez sur une carte pour voir les détails.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <button
                type="button"
                className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
                onClick={() => setSelected(project)}
              >
                <div className="project-card-top">
                  <h3 className="project-title">{project.title}</h3>
                  {project.badge && (
                    <span
                      className={`project-badge ${project.ongoing ? 'project-badge-ongoing' : ''}`}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="project-tagline">{project.tagline}</p>
                <div className="project-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="project-open">
                  Voir les détails <ArrowIcon size={16} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              <CloseIcon size={20} />
            </button>

            <div className="modal-head">
              {selected.badge && (
                <span
                  className={`project-badge ${selected.ongoing ? 'project-badge-ongoing' : ''}`}
                >
                  {selected.badge}
                </span>
              )}
              <h3 className="modal-title">{selected.title}</h3>
              <p className="modal-tagline">{selected.tagline}</p>
            </div>

            <p className="modal-description">{selected.description}</p>

            <h4 className="modal-subsection">Technologies</h4>
            <div className="project-stack">
              {selected.stack.map((tech) => (
                <span key={tech} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="modal-subsection">Points clés</h4>
            <ul className="modal-list">
              {selected.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="modal-meta">
              {selected.year && <span>Année : {selected.year}</span>}
              {selected.supervisor && (
                <span>Encadré par : {selected.supervisor}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}