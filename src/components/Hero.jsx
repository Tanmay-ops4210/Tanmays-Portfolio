import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const chipsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
    }
    
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
    }
    
    if (chipsRef.current) {
      tl.from(chipsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4")
    }
  }, [])

  const techStack = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Firebase', 'Supabase']

  return (
    <section id="hero" className="hero-section" data-bg="#0a0a0a" data-text="#ffffff">
      <div className="hero-container">
        <h1 className="hero-title" ref={titleRef}>
          Full-Stack Developer
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          I build complete web applications — frontend, backend, authentication, and databases.
        </p>
        <div className="tech-chips" ref={chipsRef}>
          {techStack.map((tech, index) => (
            <span key={index} className="tech-chip">{tech}</span>
          ))}
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb"></div>
      </div>
    </section>
  )
}

export default Hero
