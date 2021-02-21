import React from 'react'
import ItemInCart from './ItemInCart'
import {useState} from 'react'
import '../stylesheets/ShoppingCart.css'

const ShoppingCart = ({initialCartItems}) => {

  const [numItems, setNumItems] = useState(initialCartItems)
  const updateQty = (id, newQty) => {
     const newItems = numItems.map(item =>{
         if(item.id == id){
              return {...item, qty: newQty};
         }
         return item;
     });
     setNumItems(newItems);   
    }

    const [subTotal, setSubTotal] = useState(0.00);
    const grandTotal = numItems.reduce((total, item) => (
        total + item.qty * item.price
     ), 0 ).toFixed(2);
   

    return (
        <div className='Cart'>
            <h1 className='Cart-Title'>Items in Cart</h1>
            <div className='Cart-Items'>
              {numItems.map(item =>(
                <ItemInCart key={item.id} updateQty={updateQty} {...item}/>
              ))}
            </div>
            <div className='Cart-Total'>Subtotal: {grandTotal} </div>
        </div>
    )
}

export default ShoppingCart
