import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "EventEase",
    description: "Event management platform",
    tech: "HTML · CSS · JS · TypeScript · Supabase",
    link: "https://xeon-virid.vercel.app/",
    image: "/image/event.png",
    theme: "light"
  },
  {
    id: 2,
    title: "Food Donation & Waste Management",
    description: "Food donation and waste management platform",
    tech: "HTML · CSS · JS · TypeScript",
    link: "https://nourish-flourish-wheat.vercel.app/",
    image: "/image/food.png",
    theme: "green"
  },
  {
    id: 3,
    title: "Health Analyzer",
    description: "Health analytics platform",
    tech: "HTML · CSS · JS · TypeScript",
    link: "https://pythogen-health-platform.vercel.app/",
    image: "/image/health.png",
    theme: "light"
  },
  {
    id: 4,
    title: "Bus & Movie Booking",
    description: "Bus and movie ticket booking platform",
    tech: "HTML · CSS · JS · TypeScript",
    link: "https://seatsmart-pro.vercel.app/",
    image: "/image/book.png",
    theme: "green"
  }
]

function Projects() {
  const trackRef = useRef(null)
  const horizontalScrollTrigger = useRef(null)

  useEffect(() => {
    const initHorizontalScroll = () => {
      if (horizontalScrollTrigger.current) {
        horizontalScrollTrigger.current.kill()
        horizontalScrollTrigger.current = null
      }

      if (window.innerWidth > 768 && trackRef.current) {
        horizontalScrollTrigger.current = gsap.to(trackRef.current, {
          xPercent: -300,
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-section",
            pin: true,
            scrub: 1,
            end: "+=3000",
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }
    }

    // Initialize after a short delay
    const timer = setTimeout(() => {
      initHorizontalScroll()
      ScrollTrigger.refresh()
    }, 100)

    // Handle resize
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
        initHorizontalScroll()
      }, 250)
    }

    window.addEventListener("resize", handleResize)

    // Refresh on load
    const handleLoad = () => {
      ScrollTrigger.refresh()
      initHorizontalScroll()
    }
    window.addEventListener("load", handleLoad)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("load", handleLoad)
      if (horizontalScrollTrigger.current) {
        horizontalScrollTrigger.current.kill()
        horizontalScrollTrigger.current = null
      }
    }
  }, [])

  return (
    <section id="work" className="horizontal-section" data-bg="#0b0b0b" data-text="#ffffff">
      <div className="horizontal-track" ref={trackRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`panel ${project.theme} project-bg`}
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

