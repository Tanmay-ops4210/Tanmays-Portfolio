import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Loader from './components/Loader'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import BackendCapabilities from './components/BackendCapabilities'
import Workflow from './components/Workflow'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import { useLenis } from './hooks/useLenis'
import { useScrollAnimations } from './hooks/useScrollAnimations'

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true)
  
  useLenis()
  useScrollAnimations()

  useEffect(() => {
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
      <About />
      <WhatIDo />
      <TechStack />
      <Projects />
      <BackendCapabilities />
      <Workflow />
      <GitHub />
      <Contact />
    </>
  )
}

export default App
