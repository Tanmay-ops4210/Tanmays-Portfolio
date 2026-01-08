import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ImageStage() {
  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const img3Ref = useRef(null)

  useEffect(() => {
    const triggers = []
    
    if (img1Ref.current && img2Ref.current && img3Ref.current) {
      const trigger1 = gsap.to(img1Ref.current, {
        y: -120,
        rotate: -8,
        scrollTrigger: {
          trigger: ".image-stage",
          scrub: true,
        },
      })
      triggers.push(trigger1.scrollTrigger)

      const trigger2 = gsap.to(img2Ref.current, {
        y: -220,
        scale: 1.15,
        scrollTrigger: {
          trigger: ".image-stage",
          scrub: true,
        },
      })
      triggers.push(trigger2.scrollTrigger)

      const trigger3 = gsap.to(img3Ref.current, {
        y: -160,
        rotate: 10,
        scrollTrigger: {
          trigger: ".image-stage",
          scrub: true,
        },
      })
      triggers.push(trigger3.scrollTrigger)
    }

    return () => {
      triggers.forEach(trigger => {
        if (trigger) trigger.kill()
      })
    }
  }, [])

  return (
    <section className="section image-stage" data-bg="#0f3d2e" data-text="#ffffff">
      <div className="image-wrap">
        <img ref={img1Ref} className="img img-1" src="https://picsum.photos/600/800?1" alt="" />
        <img ref={img2Ref} className="img img-2" src="https://picsum.photos/600/800?2" alt="" />
        <img ref={img3Ref} className="img img-3" src="https://picsum.photos/600/800?3" alt="" />
      </div>
    </section>
  )
}

export default ImageStage

