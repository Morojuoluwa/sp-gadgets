import { useContext } from "react"
import { shopContext } from "./shop-context"


export default function CartItem(props){
    const {addToShop, removeFromShop,cartItems, updateCart } = useContext(shopContext)
    const {id, productName, price, productImage} =props.data
    const emageStyle = {width: '100px', height: '100px'}
    const imp = {width: '20px', height: '5px'}
    return<div className="flex mb-4 w-1/2 sm:w-1/3 py-2 border-solid border-2 rounded-lg shadow-md" >
        <img className="mr-1 sm:mr-3" style={emageStyle} src={productImage}/>
        <div className="flex flex-col justify-center">
            <p className=" font-bold">{productName}</p>
            <p className=" mb-3"><span>&#8358;</span> {price}</p>
            <div className=" rounded-sm ">
                <button onClick={()=>removeFromShop(id)} className="text-xs text-black px-1 bg-slate-200">-</button>
                <input className=" text-center outline-none w-7 text-xs " type="text" onChange={(e) =>updateCart(e.target.value, id)} value={cartItems[id]} name="dont" id="" />
                <button onClick={()=> addToShop(id)} className="text-xs text-black px-1 bg-slate-200">+</button>
            </div>
        </div>
    </div>


}