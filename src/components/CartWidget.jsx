import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import '../css/CartWidget.css';
import { cartContext } from './CartContext'
import { useContext } from 'react';

export default function CartWidget() {

  const {totalProducts} = useContext(cartContext)
  return (
    <div>
      <button className='btn-cart'>
      <Badge text="dark" bg="transparent">
      <Cart4 style={{color:'000'}} size={26} />
      {totalProducts()}</Badge>
      </button>
    </div>
  )
}
