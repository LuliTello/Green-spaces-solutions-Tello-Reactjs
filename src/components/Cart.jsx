import React, { useContext, useState } from 'react'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';
import '../css/Cart.css'

export default function Cart() {

const {cart, totalPrice, clear} = useContext(cartContext);

function terminarCompra(){
  const totalAPagar= cart.reduce((acc, item)=>acc + item.price*item.quantity, 0);
}
if(cart.length === 0){
  return(
  <>
  <div style={{margin: '1rem auto', textAlign: 'center'}}>
  <p className='texto_seguir'>No hay productos en el carrito.</p>
  <Link className='btn_seguir' to='/'>Seguir comprando</Link>
  </div>
  </>
  );
}
  return (
    <div className='contenido' style={{ padding:'2rem 0'}}>
      <div className='itemCart__flex'>
      {cart.map(product =>
      <ItemCart key={product.id} product={product}/>)}
      </div>
      <div className='contenedor_btn'>

        <h3 className='texto_total'>Total Compra USD: {totalPrice()}</h3>
       <Button className='clear_btn' variant="success" onClick = {()=> clear()}>VACIAR CARRITO</Button>
       
       <Button variant="success" className='fin_btn'  onClick={()=>terminarCompra([])}><Link className="fin_link" to='/checkout'>FINALIZAR COMPRA</Link></Button>
       </div>
    </div>
  )
}