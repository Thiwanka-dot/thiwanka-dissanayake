import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import TechStack from "./pages/TechStack/TechStack"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Navbar/Navbar"


export default function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/tech-stack" element={<TechStack/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}