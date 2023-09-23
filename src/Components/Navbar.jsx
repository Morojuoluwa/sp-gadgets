import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import alpha from "../assets/vect.avif"
import {motion} from "framer-motion"

const logoVariant = {
    mafarahan:{
        x:-100
    },
    farahan:{
        x: 0,
        transition:{
            delay: 0.7,
            duration: 0.8
        }
    }
}

const shopVariant = {
    noShow:{
        y:-200
    },
    show:{
        y:0,
        transition:{
            delay: 0.3,
            duration: 0.8

        }
    }
}

const cartVariant = {
    noShow:{
        y:-200
    },
    show:{
        y:0,
        transition:{
            delay: 0.5,
            duration: 0.8

        }
    }
}

export default function Navbar(){
    return<div>
        <div className=" w-full flex justify-between items-center py-4 overflow-hidden bg-slate-900 px-5 ">
            <motion.div 
            variants={logoVariant}
            initial ="mafarahan"
            animate="farahan"
          

           
            className="emg bg-black">
               <img  className="w-8 bg-transparent  h-auto" src={alpha} alt="" srcset="" />
            </motion.div>
            <div className="lnk flex items-center">
            <motion.div
            variants={shopVariant}
            initial="noShow"
            animate="show"
            ><Link to="/" className="text-white text-lg mr-3">Shop</Link></motion.div>
            <motion.div
             variants={cartVariant}
             initial="noShow"
             animate="show"
            ><Link to="/cart" className="text-white"><ShoppingCart/></Link></motion.div>
            </div>
           
        </div>
    </div>
}