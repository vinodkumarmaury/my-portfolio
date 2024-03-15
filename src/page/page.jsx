import React from "react"

import Contact from "../components/Contact/Contact"
// import Experience from "../components/Experience/Experience"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Project from "../components/Project/Project"
import Work from "../components/Work/Work"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import Education from "../components/Education/Education"

const Home = ()=>{
    return(
        <>
        <Hero/> 
        <About/>
        <Skills/>
        {/* <Experience/> */}
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home