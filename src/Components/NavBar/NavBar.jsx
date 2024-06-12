import "./NavBarStyle.scss"
import {motion} from "framer-motion"
import SideBar from "../SideBar/SideBar"
const NavBar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <SideBar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Just Front.</motion.span>
            <div className="social">
                <a href=""><motion.img src="/facebook.png" alt="" whileHover={{scale:1.1}}/></a>
                <a href=""><motion.img src="/linkedin.png" alt="" whileHover={{scale:1.1}}/></a>
                <a href=""><motion.img src="/github.png" alt="" whileHover={{scale:1.1}}/></a>
            </div>
        </div>
    </div>
  )
}

export default NavBar 