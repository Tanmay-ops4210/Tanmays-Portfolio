import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="contact-section" data-bg="#0a0a0a" data-text="#ffffff">
      <div className="section-container">
        <div className="contact-content" ref={contentRef}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-message">
            Open to learning opportunities, internships, and junior roles. 
            Let's build something together.
          </p>
          <div className="contact-links">
            <a href="mailto:yourmail@example.com" className="contact-link">
              Email
            </a>
            <a 
              href="https://github.com/Tanmay-ops4210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

