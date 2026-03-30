import React, { useEffect } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Minitask from "./components/Minitask";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"
import Contactform from "./components/Contactform";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,   
      mirror: true, 
    });
    
   
    AOS.refresh();
  }, []);




  return (
    <>
     
      <Hero />
      <About />
      <Skills />
      <Timeline />
       <Projects />
      
     
      
      <Minitask/>
      <Contactform/>
      <Footer />
    </>
  );
}

export default App;