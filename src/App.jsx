import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Loader from './components/Loader'
import Hero from './components/Hero'
import ImageStage from './components/ImageStage'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useLenis } from './hooks/useLenis'
import { useScrollAnimations } from './hooks/useScrollAnimations'

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true)
  
  useLenis()
  useScrollAnimations()

  useEffect(() => {
    // Hide loader after animation
    const timer = setTimeout(() => {
      setLoaderVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loaderVisible && <Loader />}
      <Nav />
      <Hero />
      <ImageStage />
      <Projects />
      <Footer />
    </>
  )
}

export default App

