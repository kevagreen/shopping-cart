import React from 'react'
import '../stylesheets/ItemInCart.css'

const ItemInCart = ({id, name, price, qty, updateQty}) => {
    const addOne = ()=>{
        updateQty(id, qty + 1);
    }

    const subtractOne = ()=>{
        if(qty != 0){
        updateQty(id, qty - 1);
        }
    }

    return (
        <div className='CartItem'>
           <div>{name}</div> 
           <div>${price}</div> 
           <button onClick={addOne} >-</button>
           <div>{qty}</div> 
           <button onClick={subtractOne}>+</button>
        </div>
    )
}

export default ItemInCart

