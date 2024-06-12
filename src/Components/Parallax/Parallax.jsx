import "./ParallaxStyle.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react"

const Parallax = ({type}) => {

     const ref = useRef()

     const {scrollYProgress} = useScroll({
     target: ref,
     offset:["start start", "end start"],
     })

     const yText =useTransform(scrollYProgress,[0,1],["0%","500%"]);
     const yPlanets =useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div className="parallax" ref={ref} style={{background:type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}}>
        <motion.h1 style={{y: yText}}>{type==="services" ? "What I Do" : "What I Did"}</motion.h1>
        <div className="mountains">

        </div>
        <motion.div style={{y: yPlanets, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}} className="planets" >

        </motion.div>   
        <motion.div style={{x: yPlanets}}className="stars">

        </motion.div>

    </div>
  )
}

export default Parallax