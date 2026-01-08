import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        y: 60,
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
    <section id="about" ref={sectionRef} className="about-section" data-bg="#0f0f0f" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={contentRef}>
          <p>
            I build end-to-end web applications, working on everything from the user interface 
            to the server-side logic, authentication systems, and database management. 
            My focus is on creating complete, functional solutions that solve real-world problems.
          </p>
          <p>
            Rather than building demos, I prioritize understanding how systems work together — 
            how the frontend communicates with the backend, how authentication flows work, 
            and how data is structured and managed. Each project is a learning opportunity 
            to improve my understanding of full-stack development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

