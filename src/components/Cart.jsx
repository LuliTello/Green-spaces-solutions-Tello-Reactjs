import React, { useContext } from 'react'
import { cartContext } from './CartContext'

export default function Cart({item}) {

const {removeItem} = useContext(cartContext);
    
  return (
    <div>Cart</div>
  )
}
