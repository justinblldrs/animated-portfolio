import "./SideBarStyle.scss"
import ToggleButton from "./ToggleButtons/ToggleButton"
import Links from "./Links/Links"
import { useState } from "react"
import { delay, motion } from "framer-motion"
const SideBar = () => {

const [open,setOpen]=useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
               type:"spring",stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(20px at 49px 47px)",
            transition:{
                delay:0.5, type:"spring",stiffness: 400,damping: 40,
            }
        }

    }
  return <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>

    </motion.div>
  
}   

export default SideBar