import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Nav() {
  const navRef = useRef(null)
  const progressRef = useRef(null)
  const lastScroll = useRef(0)

  useEffect(() => {
    // Scroll progress
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            width: `${self.progress * 100}%`,
            ease: "none",
          })
        }
      },
    })

    // Nav hide/show on scroll
    const handleScroll = () => {
      const current = window.scrollY
      if (navRef.current) {
        if (current > lastScroll.current && current > 120) {
          gsap.to(navRef.current, { y: "-100%", duration: 0.35 })
        } else {
          gsap.to(navRef.current, { y: "0%", duration: 0.35 })
        }
      }
      lastScroll.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="nav" ref={navRef}>
      <div className="nav-progress" ref={progressRef}></div>
      <div className="nav-inner">
        <div className="nav-logo">Tanmay Mogaveera</div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
