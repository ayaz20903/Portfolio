import { motion } from "framer-motion";
import React from "react";

const sliderVariant = {
    initial:{
        x:0,
    },
    animate:{
        x:"-65%",
        
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
            delay: 1,
        },
    }
}

const Hero = () => {

    return (
        <div className="big-text pt-2 mx-auto h-full relative overflow-hidden">
            <motion.h1 className="hero-bg-inifinit-text" variants={sliderVariant} initial="initial" animate="animate">Front-End Developer</motion.h1>
            <div className=" flex items-center justify-center h-full overflow-hidden">
                <img className="z-10 w-3/5" src="/avatar.webp" alt="avatar image"/>
            </div>
            {/* <h2 className="name">It's Ayaz</h2> */}
            {/* <div className="hero-home-overlay"></div> */}
        </div>
    )
};

export default Hero;