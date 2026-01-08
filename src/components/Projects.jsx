import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectModal from './ProjectModal'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    name: "EventEase",
    description: "Complete event management platform with user authentication, event creation, and real-time updates.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Supabase", "Firebase Auth"],
    image: "/image/event.png",
    link: "https://xeon-virid.vercel.app/",
    caseStudy: {
      problem: "Need for a platform to create, manage, and discover events with user authentication and real-time updates.",
      solution: "Built a full-stack application with Supabase for database, Firebase for authentication, and real-time event management features.",
      features: [
        "User authentication and profiles",
        "Event creation and management",
        "Real-time event updates",
        "Event search and filtering",
        "User event registrations"
      ],
      frontend: "React-based UI with TypeScript, responsive design, and smooth animations",
      backend: "Supabase backend with RESTful APIs for event CRUD operations",
      auth: "Firebase Authentication with email/password and social login",
      database: "Supabase PostgreSQL database with optimized queries",
      learned: "Learned about real-time database subscriptions, complex state management, and integrating multiple backend services."
    }
  },
  {
    id: 2,
    name: "Food Donation & Waste Management",
    description: "Platform connecting food donors with recipients, reducing waste and helping communities.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Firebase"],
    image: "/image/food.png",
    link: "https://nourish-flourish-wheat.vercel.app/",
    caseStudy: {
      problem: "Food waste is a major issue, and there's a need to connect donors with those who need food.",
      solution: "Created a matching platform with user authentication, donation listings, and request management.",
      features: [
        "Donor and recipient registration",
        "Food donation listings",
        "Request management system",
        "Location-based matching",
        "Donation history tracking"
      ],
      frontend: "TypeScript-based frontend with modern UI components",
      backend: "Firebase backend with Cloud Functions for business logic",
      auth: "Firebase Authentication with role-based access",
      database: "Firebase Firestore for real-time data synchronization",
      learned: "Gained experience with Firebase services, location-based features, and building scalable data structures."
    }
  },
  {
    id: 3,
    name: "Health Analyzer",
    description: "Health analytics platform for tracking and analyzing personal health metrics.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Supabase"],
    image: "/image/health.png",
    link: "https://pythogen-health-platform.vercel.app/",
    caseStudy: {
      problem: "Users need a way to track health metrics and visualize their health data over time.",
      solution: "Built a comprehensive health tracking system with data visualization and analytics.",
      features: [
        "Health metric tracking",
        "Data visualization charts",
        "Historical data analysis",
        "User profiles and settings",
        "Export functionality"
      ],
      frontend: "Interactive dashboards with chart libraries and responsive design",
      backend: "Supabase backend with optimized queries for analytics",
      auth: "Supabase Auth with secure user sessions",
      database: "PostgreSQL database with time-series data optimization",
      learned: "Learned about data visualization, time-series data handling, and building analytics features."
    }
  },
  {
    id: 4,
    name: "Bus & Movie Booking",
    description: "Complete booking system for bus tickets and movie tickets with payment integration.",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Firebase"],
    image: "/image/book.png",
    link: "https://seatsmart-pro.vercel.app/",
    caseStudy: {
      problem: "Need for a unified platform to book both bus and movie tickets with secure transactions.",
      solution: "Developed a dual-booking system with seat selection, payment processing, and booking management.",
      features: [
        "Bus ticket booking with seat selection",
        "Movie ticket booking",
        "Payment processing",
        "Booking history and management",
        "Email confirmations"
      ],
      frontend: "TypeScript frontend with interactive seat maps and booking flows",
      backend: "Firebase backend with Cloud Functions for booking logic",
      auth: "Firebase Authentication with secure payment handling",
      database: "Firestore for booking data and transaction records",
      learned: "Gained experience with payment integration, complex booking logic, and handling concurrent bookings."
    }
  }
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    if (projectsRef.current) {
      gsap.from(projectsRef.current.children, {
        y: 60,
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
    <>
      <section id="projects" ref={sectionRef} className="projects-section" data-bg="#0a0a0a" data-text="#ffffff">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div 
                  className="project-image"
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <div className="project-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Case Study
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}

export default Projects
