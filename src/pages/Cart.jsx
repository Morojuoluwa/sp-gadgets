import { useContext, useState } from "react"
import { PRODUCT } from "../Product"
import { shopContext } from "./shop-context"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom"



export default function Cart(){
    const navigate = useNavigate()
    const {cartItems, getTotal} = useContext(shopContext)
    const totalAmount = getTotal()
    const [visi, setVisi] = useState(false)
    return <div>
        <h1 className=" text-center mb-4 text-lg text-black font-bold">YOUR CART ITEMS</h1>
        <div className=" flex flex-col items-center ">
            {PRODUCT.map((product)=>{
                if(cartItems[product.id] !==0){
                    return <CartItem data={product}/>
                }
            })}


        </div>
        {totalAmount> 0?
            <div className="tot flex flex-col items-center pb-10">
                <p className=" text-right  mb-4"><span className="font-semibold">Subtotal</span> <span>&#8358;</span> : {totalAmount} </p>
                <div className="bort 5">
                    <button onClick={() => navigate("/")} className=" w-36 mr-3 bg-slate-950 text-white py-1 rounded-md">continue shopping</button>
                    <button
                   
                    className=" w-36 bg-slate-950 text-white py-1 rounded-md">cashout</button>
                </div>
                
            </div>
         :<h1 className=" text-center font-bold mt-4 text-2xl">YOUR CART ITEM IS EMPTY</h1>}
    </div>
}


