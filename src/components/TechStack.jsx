import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techCategories = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
  Database: ['Firebase', 'Supabase'],
  Authentication: ['Firebase Auth', 'Session-based Login'],
  Tools: ['Git', 'GitHub', 'Vercel', 'Postman']
}

function TechStack() {
  const sectionRef = useRef(null)
  const categoriesRef = useRef(null)

  useEffect(() => {
    if (categoriesRef.current) {
      gsap.from(categoriesRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.7,
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
    <section ref={sectionRef} className="techstack-section" data-bg="#0f0f0f" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-categories" ref={categoriesRef}>
          {Object.entries(techCategories).map(([category, techs], catIndex) => (
            <div key={catIndex} className="tech-category">
              <h3 className="category-title">{category}</h3>
              <div className="tech-items">
                {techs.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

