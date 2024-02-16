import * as React from "react";
import '../global.css'
import "../app.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";


const IndexPage = () => {
  return (
    <main>  
        <section className="slider">
          <Hero/>
        </section>
        {/* <Navbar/> */}

        <section className="slider">
          <About/>
        </section>
        
        <section className="slider">About</section>
        <section className="slider">Skills & Exprience</section>
        <section className="slider">Projects</section>
        <section className="slider">Contact</section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
