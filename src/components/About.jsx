import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import AnimationImg from "./AnimationImg";

const About = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        targer :ref,
        offset : ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0,1], ["0%","-2500%"]);

    const frontend = ["F", "r", "o", "n", "t", "-", "E", "n", "d"];
    const software = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'];
    const developer = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    const text = "Front-End Software Developer";

    // function useParallax(value: MotionValue<number>, distance: number) {
    //     return useTransform(value, [0, 1], [-distance, distance]);
    // }

    return (
        <div className="container hero-section mx-auto py-3 pt-0 relative" ref={ref}>
            <img className="dots-img" src="/hero-dots.png" alt="dots image" />
            <div className="flex flex-col-reverse md:flex-row h-full justify-center items-center">
                <div className="flex-1">
                    <h2>
                        {/* <div className="inline">
                                {
                                    text.split("").map((char, index) =>
                                        <span key={index} className="bounce myElement">{char}
                                         {index < char.length - 1 && ' '}
                                        </span>                  
                                    )
                                }   
                            </div> */}
                        <div className="inline mr-4">
                            {
                                frontend.map((char,index) =>
                                    <span key={index} className="bounce myElement">{char}</span>
                                )
                            }
                        </div>
                        <div className="inline">
                            {
                                software.map((char, index) =>
                                    <span key={index} className="bounce myElement">{char}</span>
                                )
                            }
                        </div>
                        <div>
                            {
                                developer.map((char, index) =>
                                    <span key={index} className="bounce myElement">{char}</span>
                                )
                            }
                        </div>
                    </h2>

                    <p className="w-4/5 mt-3">
                        Resolving design problems, building smart user interfaces and useful interactions,
                        developing rich web applications and seamless web experiences.
                    </p>

                    <a className="text-[#9c27b0] font-semibold flex items-center mt-5 about-me">About me 
                        <svg className="rotate-[270deg] angle-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#9C27B0"></path></svg>
                    </a>

                    <motion.div className="h-[50px] w-[50px] fixed bottom-10 "
                     animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 360],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        // repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                        <a href="https://github.com/ayaz20903">
                        <img className="" src="/github-img.svg" alt="githib image" />
                        </a>
                    </motion.div>
                </div>

                <motion.img className="purple-square" width="1" height="1" src="/purple_square.png" alt="square image"
                    drag
                    dragConstraints={{
                        top: -400,
                        left: -400,
                        right: 500,
                        bottom: 50,
                    }}
                />

                <div className="flex-1 relative">
                    <AnimationImg yBg={yBg}/>
                    {/* <img className="laptop-img" width="1" height="1" src="../../public/laptop_img.svg" alt="laptop image"/> */}
                    {/* <img className="laptop-img" width="1" height="1" src="../../public/laptop_img1.svg" alt="laptop image"/> */}
                    <img className="laptop-img" width="1" height="1" src="/laptop_img1.svg" alt="laptop image" />
                    {/* <img src="../../public/facebook.png"></img> */}
                </div>
            </div>

        </div>
    )
}

export default About;