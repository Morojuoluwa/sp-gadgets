import { createContext, useContext, useState } from "react";
import { PRODUCT } from "../Product";

export const shopContext = createContext(null);

const getDefaultCart =() =>{
    let cart = {}
    for (let i = 1; i < PRODUCT.length +1; i++){
        cart[i] = 0
    }
    return cart;
    
}

export default function ShopContextProvider (props){
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotal = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo = PRODUCT.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount
    }
    const addToShop = (itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))

    }

    const removeFromShop = (itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    }
    
    const updateCart = (newAmount, itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: newAmount}))
    }


    const contextValue = {cartItems, addToShop, removeFromShop, updateCart, getTotal}

    return <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>

}