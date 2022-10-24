import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div>
      <button className='btn-card'>
      <ShoppingCartIcon fontSize='large' />
      </button>
    </div>
  )
}
