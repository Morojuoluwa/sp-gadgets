import { PRODUCT } from "../Product" 
import Product from "./Product"
import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from "react"

export default function Shopp(){
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const mainControl = useAnimation()

    useEffect(() =>{
        if(isInView){
            mainControl.start('visible')

            console.log(isInView)

        }
    }, [isInView])


    return <div ref={ref} className=" overflow-hidden mx-auto ">
            <motion.h1 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5, type: 'tween', duration:1.5}}
            className=" text-center text-xl sm:text-4xl font-bold text-black py-5">MJ GADGETS</motion.h1>
        <motion.div 
        variants={{
            noShow:{
                opacity:0,
                y:75
            },

            visible: {
                opacity:1,
                y:0,
                
                }
            
        }}
        initial= "noShow"
        animate = {mainControl}
        transition={{duration:0.5, delay:0.3}}
        
        className=" w-full h-auto place-items-center grid grid-cols-2 sm:grid-cols-3">
            {PRODUCT.map((product) => <Product key ={product.id} data = {product}/>)}
            </motion.div> 
        </div>
}