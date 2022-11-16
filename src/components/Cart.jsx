import React, { useContext } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';

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
      {carrito.map(product =>
      <ItemCart key={product.id} product={product}/>)}
      <h3>
        Total USD: {totalPrice()}
       </h3>
       <Button variant="success" onClick = {()=> clear()}>Vaciar Carrito</Button>

    </div>
  )
}