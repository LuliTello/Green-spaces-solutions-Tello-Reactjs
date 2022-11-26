import React, { useContext, useState } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';
import '../css/Cart.css'

export default function Cart() {

const {carrito, totalPrice, clear} = useContext(cartContext);

function terminarCompra(){
  const totalAPagar= carrito.reduce((acc, item)=>acc + item.price*item.cantidad, 0);
}
if(carrito.length === 0){
  return(
  <>
  <div style={{margin: '1rem auto', textAlign: 'center', backgroundColor:'rgb(240, 253, 165)'}}>
  <p>No hay productos en el carrito.</p>
  <Link className='btn_seguir' to='/'>Seguir comprando</Link>
  </div>
  </>
  );
}
  return (
    <div style={{ padding:'2rem 0', backgroundColor:'rgb(240, 253, 165)'}}>
      <div className='itemCart__flex'>
      {carrito.map(product =>
      <ItemCart key={product.id} product={product}/>)}
      </div>
      <div className='contenedor_total'>
      <h3>
        Total USD: {totalPrice()}
       </h3>
       <Button className='clear_btn' variant="success" onClick = {()=> clear()}>Vaciar Carrito</Button>
       

       <Button onClick={()=>terminarCompra([])}><Link to='/checkout'>FINALIZAR COMPRA</Link></Button>
       </div>
    </div>
  )
}