import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const data = useContext(CartContext)
    const total = data.items.reduce((pre, curr) => pre + curr.price, 0)

    return (
        <>
            <div className='cart'>
                <h1>Cart</h1>
                {
                    data && data.items.map((item) => (
                        <li>
                            {item.name} - {item.price}
                        </li>
                    ))
                }

                <h5>Total Bill : ${total}</h5>
            </div>
        </>
    )
}
