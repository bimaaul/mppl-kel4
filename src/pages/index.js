import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
      }

    return (
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />  
          <HeroSection />
        </Router>
    )
}

export default Home
