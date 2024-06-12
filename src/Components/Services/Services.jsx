import "./ServicesStyle.scss"
import {motion,useInView} from "framer-motion"
import {useRef} from "react"
import React from 'react'

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"100px"})

    const Variants = {
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

    
    }
  return (
    <motion.div className="services"  variants={Variants} initial="initial" animate={"animate"} ref={ref}>
        <motion.div className="text-container">
            <p>I focus on helping your brand grow
                <br/> and move forward  
            </p>
            <hr/>
        </motion.div>
        <motion.div className="title-container">
            <div className="title">
                <img src="/people.webp" alt="img" />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business
                </h1>
                <motion.button whileHover={{color: "black",background: "white"}}>What We Do?</motion.button>
            </div>
           
        </motion.div>
        <motion.div className="list-container">
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Omnis maxime eius animi commodi ad reprehenderit dolorem cum!
                     Amet officia maxime itaque incidunt numquam esse sit fuga voluptas illum! Fugit, ea.</p>
                <button>Go</button>
            </div>
            <div className="box">   
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime eius animi commodi ad reprehenderit dolorem cum!
                     Amet officia maxime itaque incidunt numquam esse sit fuga voluptas illum! Fugit, ea.</p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime eius animi commodi ad reprehenderit dolorem cum!
                     Amet officia maxime itaque incidunt numquam esse sit fuga voluptas illum! Fugit, ea.</p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime eius animi commodi ad reprehenderit dolorem cum!
                     Amet officia maxime itaque incidunt numquam esse sit fuga voluptas illum! Fugit, ea.</p>
                <button>Go</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services
