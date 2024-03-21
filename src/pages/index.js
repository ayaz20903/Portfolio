import * as React from "react";
import '../global.css'
import "../app.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


const IndexPage = () => {
  return (
    <main>  
        <section className="slider">
          <Hero/>
        </section>
        

        <section className="slider">
        <Navbar/>
          <About/>
        </section>
        
        {/* <section className="slider">About</section> */}
        <section className="slider"><Skills/></section>
        <section className="slider"><Projects/></section>
        <section className="slider"><Contact/></section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
