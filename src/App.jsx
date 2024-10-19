// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Program from "./pages/Program.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import About from "./pages/About.jsx";
// import logo from "./assets/images/fnrc_logo.svg";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <ImageCarousel/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
