import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Loader() {
  const loaderRef = useRef(null)

  useEffect(() => {
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        delay: 1,
        ease: "power4.inOut",
      })
    }
  }, [])

  return (
    <div className="loader" ref={loaderRef}>
      <span className="loader-text">LOADING</span>
    </div>
  )
}

export default Loader

