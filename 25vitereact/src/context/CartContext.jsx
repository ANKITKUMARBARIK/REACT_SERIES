import React, { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [items, setItems] = useState([])

    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
