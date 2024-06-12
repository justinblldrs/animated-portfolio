import "./HeroStyle.scss"
import {motion} from "framer-motion"
const textVariants = {
    initial: {
        x:  -500,
        opacity: 0,

    },
    animate: {
        x:0,
        opacity:1,
        transition:{
        duration: 1,
        staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity:0,
        y:0,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x: "-220%",
        transition:{
        repeat:Infinity,
        duration: 5,
        repeatType: "mirror",
        },
    },

}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
           <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
             <motion.h2 variants={textVariants}>Justin Mark Balladares</motion.h2>
             <motion.h1 variants={textVariants}>Front-End Web Developer</motion.h1>
             <motion.div className="buttons" variants={textVariants}>
               <motion.button variants={textVariants}>See the latest work</motion.button>
               <motion.button variants={textVariants}>Contact me</motion.button>
             </motion.div>            
             <motion.img variants={textVariants} animate ="scrollButton" src="/scroll.png" alt="img"/>
           </motion.div>
           <motion.div variants={sliderVariants} animate="animate" initial="initial"  className="sliding-text">
            Developer Designer Artist
            </motion.div>
        </div>      
        {/* <div className="imageContainer">
        <img src="/hero.png" alt="img"/>      
        </div> */}
        

    </div>
  )
}

export default Hero