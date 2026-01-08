import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  "Understand the problem",
  "Plan structure and flow",
  "Build frontend",
  "Develop backend APIs",
  "Integrate auth & database",
  "Test and refine"
]

function Workflow() {
  const sectionRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    if (stepsRef.current) {
      gsap.from(stepsRef.current.children, {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="workflow-section" data-bg="#0a0a0a" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">How I Build</h2>
        <div className="workflow-timeline" ref={stepsRef}>
          {steps.map((step, index) => (
            <div key={index} className="workflow-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3 className="step-title">{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow

