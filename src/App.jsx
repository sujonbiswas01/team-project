import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HeroUIProvider} from "@heroui/react";
import MyNavbar from './layouts/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroUIProvider>
      <MyNavbar/>
    </HeroUIProvider>
    
    </>
  )
}

export default App
