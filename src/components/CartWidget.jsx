import React from 'react'
import { Cart } from 'react-bootstrap-icons';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div>
      <button className='btn-card'>
      <Cart size={20} />
      </button>
    </div>
  )
}
