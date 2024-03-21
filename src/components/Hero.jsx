import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

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

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        targer :ref,
        offset : ["start start", "end start"]
    });

    // const yText = useTransform(scrollYProgress, [0,1], ["0%","300%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%","500%"]);

    return (
        <div className="big-text pt-2 mx-auto h-full relative overflow-hidden z-20" ref={ref}>
            <motion.div className="hero-bg" style={{x:yBg}}></motion.div>
            <motion.h1 className="hero-bg-inifinit-text"  variants={sliderVariant} initial="initial" animate="animate">Software Developer</motion.h1>
            <motion.div style={{y:yBg}} className=" flex items-center justify-center h-full overflow-hidden z-20">
                <img className="z-10 w-full md:w-3/5" src="/avatar.webp" alt="avatar"/>
            </motion.div>
            {/* <h2 className="name">It's Ayaz</h2> */}
            {/* <div className="hero-home-overlay"></div> */}
        </div>
    )
};

export default Hero;