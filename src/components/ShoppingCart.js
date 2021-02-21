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

   

    return (
        <div className='Cart'>
            <h1 className='Cart-Title'>Items in Cart</h1>
            <div className='Cart-Items'>
              {numItems.map(item =>(
                <ItemInCart key={item.id} updateQty={updateQty} {...item}/>
              ))}
            </div>
            <div className='Cart-Total'>Grand Total: </div>
        </div>
    )
}

export default ShoppingCart
