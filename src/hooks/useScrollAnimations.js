import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    // Section color switch
    const sections = document.querySelectorAll("[data-bg]")
    
    const applyColors = (section) => {
      gsap.to(document.body, {
        backgroundColor: section.dataset.bg,
        color: section.dataset.text,
        duration: 0.7,
      })
    }

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        onEnter: () => applyColors(section),
        onEnterBack: () => applyColors(section),
      })
    })

    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("load", handleLoad)

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        ScrollTrigger.refresh()
      })
    } else {
      ScrollTrigger.refresh()
    }

    return () => {
      window.removeEventListener("load", handleLoad)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger) {
          trigger.kill()
        }
      })
    }
  }, [])
}

