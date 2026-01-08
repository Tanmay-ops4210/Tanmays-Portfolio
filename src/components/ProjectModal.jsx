import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (modalRef.current && contentRef.current) {
      gsap.from(modalRef.current, {
        opacity: 0,
        duration: 0.3
      })
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.1
      })
    }

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <div 
      className="modal-backdrop" 
      ref={modalRef}
      onClick={handleBackdropClick}
    >
      <div className="modal-content" ref={contentRef}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">{project.name}</h2>
          <div className="modal-tech">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="case-study-section">
            <h3>Problem Statement</h3>
            <p>{project.caseStudy.problem}</p>
          </div>

          <div className="case-study-section">
            <h3>Solution Overview</h3>
            <p>{project.caseStudy.solution}</p>
          </div>

          <div className="case-study-section">
            <h3>Features</h3>
            <ul className="features-list">
              {project.caseStudy.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="case-study-breakdown">
            <div className="breakdown-item">
              <h4>Frontend</h4>
              <p>{project.caseStudy.frontend}</p>
            </div>
            <div className="breakdown-item">
              <h4>Backend</h4>
              <p>{project.caseStudy.backend}</p>
            </div>
            <div className="breakdown-item">
              <h4>Authentication</h4>
              <p>{project.caseStudy.auth}</p>
            </div>
            <div className="breakdown-item">
              <h4>Database</h4>
              <p>{project.caseStudy.database}</p>
            </div>
          </div>

          <div className="case-study-section">
            <h3>What I Learned</h3>
            <p>{project.caseStudy.learned}</p>
          </div>
        </div>

        <div className="modal-footer">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Live Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

