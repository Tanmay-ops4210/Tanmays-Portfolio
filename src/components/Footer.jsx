import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const titleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: ".footer-scene",
          start: "top 80%",
        },
        y: 120,
        opacity: 0,
        duration: 1.4,
      })
    }
  }, [])

  return (
    <section id="contact" className="footer-scene" data-bg="#ffffff" data-text="#0b0b0b">
      <div className="footer-inner">
        <h2 className="footer-title" ref={titleRef}>Let's build something unforgettable</h2>
        <p className="footer-sub">
          Available for freelance & creative collaborations
        </p>
        <a href="mailto:yourmail@example.com" className="footer-btn">
          Start a project
        </a>
        <div className="footer-bottom">
          <span>© 2026 Tanmay</span>
          <span>Built with GSAP</span>
        </div>
      </div>
    </section>
  )
}

export default Footer

