import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div>
      <button className='btn-card'>
      <Badge bg="success">
      <Cart4 size={25} />
      0</Badge>
      </button>
    </div>
  )
}
