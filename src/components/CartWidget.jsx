import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import '../css/CartWidget.css';
import { cartContext } from './CartContext'
import { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link} from 'react-router-dom';



export default function CartWidget() {

  const {totalProducts} = useContext(cartContext)
  return (

    <div>
      <Button variant='success' className='btn-cart'><Link to="/cart"><Badge text="dark" bg="transparent">
      <Cart4 style={{color:'000'}} size={26} />
      {totalProducts()}</Badge>
      </Link></Button>
    </div>
  )
}
