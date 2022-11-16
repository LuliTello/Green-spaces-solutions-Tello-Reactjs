import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import './CartWidget.css';
import { cartContext } from './CartContext'
import { useContext } from 'react';

export default function CartWidget() {

  const {totalProducts} = useContext(cartContext)
  return (
    <div>
      <button className='btn-card'>
      <Badge bg="success">
      <Cart4 size={25} />
      {totalProducts()}</Badge>
      </button>
    </div>
  )
}
