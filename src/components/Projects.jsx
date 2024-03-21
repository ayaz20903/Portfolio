import React from "react";
import { motion, useAnimate, stagger  } from "framer-motion"

const loaderVariants = {
    loaderAnimation: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                // repeatType:"loop",
                repeatType: "mirror",
                duration: 0.75,
            },
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.375,
                ease: 'easeOut'
            }
        }
    }
}



const loadingContainerVariants = {
    loaderCircleAnimation: {
        y: [0, -20],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.1,
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    loaderCircleAnimation1: {
        y: [0, -20],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.3,
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    loaderCircleAnimation2: {
        y: [0, -20],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.5,
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    }
}


const Projects = () => {

    return (
        <div className="project-section flex flex-col items-center justify-center h-full">
            {/* <motion.div className="animationLoader" 
                variants={loaderVariants} animate="loaderAnimation"
            >

            </motion.div> */}
            <motion.div className="flex justify-between" >
                <motion.div className="animationLoader" variants={loadingContainerVariants} animate="loaderCircleAnimation"></motion.div>
                <motion.div className="animationLoader" variants={loadingContainerVariants} animate="loaderCircleAnimation1"></motion.div>
                <motion.div className="animationLoader" variants={loadingContainerVariants} animate="loaderCircleAnimation2"></motion.div>
            </motion.div>

            <p>Coming Soon</p>
        </div>
    )
}

export default Projects;
