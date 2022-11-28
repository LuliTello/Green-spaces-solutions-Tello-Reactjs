import React from 'react'
import { Cart4, Link } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import '../css/CartWidget.css';
import { cartContext } from './CartContext'
import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';



export default function CartWidget() {

  const {totalProducts} = useContext(cartContext)
  return (

    <div>
      <Button className='btn-cart'><a href="/cart"><Badge text="dark" bg="transparent">
      <Cart4 style={{color:'000'}} size={26} />
      {totalProducts()}</Badge></a>
      </Button>
    </div>
  )
}
