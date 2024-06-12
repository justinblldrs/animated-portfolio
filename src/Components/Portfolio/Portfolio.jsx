import "./PortfolioStyle.scss"
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
import {useRef} from 'react'

import React from 'react'

const item = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officia iste vitae consectetur veritatis vel reiciendis ab inventore recusandae, in aperiam eius sequi repellendus numquam neque accusantium magnam non dolores!"
    },

    {
        id:2,
        title:"Music Commerce",
        img:"https://images.pexels.com/photos/1359327/pexels-photo-1359327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officia iste vitae consectetur veritatis vel reiciendis ab inventore recusandae, in aperiam eius sequi repellendus numquam neque accusantium magnam non dolores!"
    },

    {
        id:3,
        title:"React News App",
        img:"https://images.pexels.com/photos/1466609/pexels-photo-1466609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officia iste vitae consectetur veritatis vel reiciendis ab inventore recusandae, in aperiam eius sequi repellendus numquam neque accusantium magnam non dolores!"
    },

    {
        id:4,
        title:"Vanilla Commerce",
        img:"https://images.pexels.com/photos/454507/pexels-photo-454507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At officia iste vitae consectetur veritatis vel reiciendis ab inventore recusandae, in aperiam eius sequi repellendus numquam neque accusantium magnam non dolores!"
    },
]

const Single =({item}) =>{
    const ref =useRef()
    const {scrollYProgress} = useScroll({target:ref,})

    const y = useTransform(scrollYProgress,[0,1], [-200,200])
    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
                 <img src={item.img} alt="img"  />
                </div>           
                <motion.div className="textContainer" style={{y}} >
                 <h2>{item.title}</h2>
                 <p>{item.desc}</p>
                 <button>See Demo</button>
                </motion.div >
            </div>
        </div>        
    </section>
}
   


const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {stiffness:100, damping:30})
  return (
    

    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Work</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {item.map((item) => (<Single item = {item} key={item.id}/>))}

    </div>
  )
}

export default Portfolio