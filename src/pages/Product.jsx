import { useContext, useState } from "react"
import { shopContext } from "./shop-context"
import {motion} from "framer-motion"


export default function Product(props){
    const {cartItems, addToShop, removeFromShop} = useContext(shopContext);
    const [rotae, setRotae] =useState(false)

    const {id, productName, price, productImage} =props.data
    // const emageStyle = { width: '280px', height: '300px'}
    // style={emageStyle}
    const cartAmount = cartItems[id]
    return <div>
        <div className=" flex flex-col items-center overall my-10">
            <div className=" ">
                <motion.img
                     animate = {{rotateY: rotae? -360: 0}}
                     className="  h-36 w-40 sm:w-72 sm:h-80" src={productImage}/>
                <div className="description flex flex-col">
                    <p className="text-center mb-2 font-bold">{productName}</p>
                    <p className="text-center mb-2 font-bold"> <span>&#8358;</span> {price}</p>
                    <motion.button
                    whileHover={{scale: 1.1, x:15, y:-5}}
                     className="butt  sm:px-3 " onClick={() => {addToShop(id)}}
                     >add to cart {cartAmount > 0 && <>({cartAmount})</>}
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
}