import React, {useContext} from 'react';
import { useState } from 'react';
import { cartContext } from './CartContext';
import '../css/Checkout.css';
import Alert from 'react-bootstrap/Alert';
import {addDoc, collection, doc, getFirestore, increment, updateDoc} from 'firebase/firestore';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Checkout() {

const {cart, totalToPay, clear } = useContext(cartContext);
const [name, setName] = useState('');
const [tel, setTel] = useState('');
const [email, setEmail] = useState('');
const [placeOrderId, setPlaceOrderId] = useState('');

function validarForm(evt) {
  evt.preventDefault();
  
    const pedido = {
      comprador: {name:name, tel: tel, email:email},
      cart: cart,
      total: totalToPay,
    };
    
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');
    addDoc(pedidos, pedido).then(({id})=>{
      setPlaceOrderId(id);
      /*cart.forEach(item=>{
        const documento = doc(db, 'productos', item.id);
        updateDoc(documento, { stock: increment(-item.quantity) });
      });*/
      
      clear();
    })
}

  return (
    <>
    {placeOrderId ? (
       <Alert className='texto_alert'variant="success">
      Gracias por su compra! El detalle llegará en breve a su email. Su número de pedido es: {placeOrderId}
      
      <Button className='btn_continue'><Link className='link_continue' to="/">Continue Comprando</Link></Button>
      
      </Alert>) : (

    <div >
    
      <h2 className='check_titulo'>Ingrese sus datos para terminar la compra</h2>
      <div className='contenedor'>
    <div className='contenedor_formulario'>
      <form onSubmit={validarForm} className='formulario'>
      <input type="text" name='Nombre y apellido' placeholder='Nombre y Apellido' value={name} onChange={(e)=>setName(e.target.value)} required/>
      <input type="number" name='tel' placeholder='Telefono' value={tel} onChange={(e)=>setTel(e.target.value)} required/>
      <input type="email" name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <button  className="btn_check" type='submit' value="Comprar">COMPRAR</button>
      </form>
    </div>
    <div className='checkout_detail'>
      <h5>Detalle del pedido</h5>
        {cart.map((item) => (
                <div className='contenedor_card' key={item.id}>
                  <Card className='checkout_card'>
                <Card.Subtitle style={{margin:'0.5rem', fontWeight:'bold'}}>Producto: {item.name}</Card.Subtitle>
                <Card.Text style={{margin:'0.5rem'}}>Cantidad: {item.quantity}</Card.Text>
                </Card>
                </div>
            ))}
            <hr />
            <p className='total_checkout'>TOTAL: USD {totalToPay} </p>
    </div>
    </div>
    </div>
    )}
    </>
  )
}
