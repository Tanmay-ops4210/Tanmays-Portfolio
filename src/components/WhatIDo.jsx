import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Frontend UI Development",
    description: "Building responsive, interactive user interfaces with modern frameworks and libraries."
  },
  {
    title: "Backend API Development",
    description: "Creating RESTful APIs, handling server-side logic, and managing data flow."
  },
  {
    title: "Authentication & Authorization",
    description: "Implementing secure login systems, session management, and user permissions."
  },
  {
    title: "Database Design & Data Handling",
    description: "Designing database schemas, writing queries, and managing data operations."
  },
  {
    title: "Deployment & Maintenance",
    description: "Deploying applications to production and ensuring smooth operation."
  }
]

function WhatIDo() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
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
    <section ref={sectionRef} className="whatido-section" data-bg="#0a0a0a" data-text="#ffffff">
      <div className="section-container">
        <h2 className="section-title">What I Do</h2>
        <div className="services-grid" ref={cardsRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo

