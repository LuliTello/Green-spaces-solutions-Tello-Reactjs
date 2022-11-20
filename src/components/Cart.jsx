import React, { useContext } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';
import './Cart.css'

export default function Cart() {

const {carrito, totalPrice, clear} = useContext(cartContext);

if(carrito.length === 0){
  return(
  <>
  <p>No hay productos en el carrito.</p>
  <Link to='/'>Seguir comprando</Link>
  </>
  );
}
  return (
    <div>
      <div className='itemCart__flex'>
      {carrito.map(product =>
      <ItemCart key={product.id} product={product}/>)}
      </div>
      <h3>
        Total USD: {totalPrice()}
       </h3>
       <Button variant="success" onClick = {()=> clear()}>Vaciar Carrito</Button>

    </div>
  )
}