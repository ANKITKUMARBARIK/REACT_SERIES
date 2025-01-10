import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Item = (props) => {
    const data = useContext(CartContext)
    console.log(data)

    return (
        <>
        <div className='item-card'>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={()=> data.setItems([...data.items, {name: props.name, price: props.price}])}>Add To Cart</button>
        </div>
        </>
    )
}
