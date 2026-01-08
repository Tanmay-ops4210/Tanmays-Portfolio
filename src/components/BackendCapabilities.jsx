import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  "REST API development",
  "Authentication flows",
  "CRUD operations",
  "Database integration",
  "Validation & error handling",
  "Server-side logic",
  "Data modeling",
  "API documentation"
]

function BackendCapabilities() {
  const sectionRef = useRef(null)
  const itemsRef = useRef(null)

  useEffect(() => {
    if (itemsRef.current) {
      gsap.from(itemsRef.current.children, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="backend-section" data-bg="#0f0f0f" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">Backend Capabilities</h2>
        <div className="capabilities-grid" ref={itemsRef}>
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-item">
              <div className="capability-icon">✓</div>
              <span className="capability-text">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BackendCapabilities

