import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function GitHub() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="github-section" data-bg="#0f0f0f" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">GitHub</h2>
        <div className="github-content" ref={contentRef}>
          <p className="github-description">
            All my projects are available on GitHub. I focus on writing clean, 
            maintainable code and building real, functional applications.
          </p>
          <a 
            href="https://github.com/Tanmay-ops4210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHub

