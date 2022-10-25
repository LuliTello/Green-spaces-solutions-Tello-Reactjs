import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div>
      <button className='btn-card'>
      <Cart4 size={25} />
      </button>
    </div>
  )
}
