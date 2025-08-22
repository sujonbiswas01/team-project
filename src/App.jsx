import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import Gallary from './shared/modules/gallary/Gallary';
import Partners from './shared/modules/partners/Partners';
import Testimonials from './shared/modules/Testimonials/Testimonials';
import Feature from './shared/modules/Feature/Feature';
import Footer from './layouts/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroUIProvider>
      <Gallary/>
      <Partners/>
      <Testimonials/>
      <Feature/>
      <Footer/>
    </HeroUIProvider>
    
    </>
  )
}

export default App
