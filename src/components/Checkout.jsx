import React, {useContext} from 'react';
import { useState } from 'react';
import { cartContext } from './CartContext';
import '../css/Checkout.css';
import {addDoc, collection, doc, getFirestore, increment, updateDoc} from 'firebase/firestore';

export default function Checkout() {

const {cart, totalToPay, clear } = useContext(cartContext);
const [name, setName] = useState('');
const [tel, setTel] = useState('');
const [email, setEmail] = useState('');
const [placeOrderId, setPlaceOrderId] = useState('');

function handleClickBuyButton(){
    const pedido = {
      comprador: {name:name, tel: tel, email:email},
      cart: cart,
      total: totalToPay,
    };
    //console.log(pedido)
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');
    addDoc(pedidos, pedido).then(({id})=>{
      setPlaceOrderId(id);
      /*cart.forEach(item=>{
        const documento = doc(db, 'productos', item.id);
        updateDoc(documento, { stock: increment(-item.stock) });
      });*/
      
      clear();
    })
}

  return (
    <>
    {placeOrderId ? (
      "Gracias por su compra! El detalle llegará en breve a su email. El N° de pedido es: " + placeOrderId
       ) : (
    <div >
      <h2 className='check_titulo'>Ingrese sus datos para terminar la compra</h2>
      
    <div>
      <form className='formulario'>
      <input type="text" placeholder='Nombre' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="number" placeholder='Telefono' value={tel} onChange={(e)=>setTel(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button  className="btn_check" type='button' onClick={handleClickBuyButton} value="Comprar">COMPRAR</button>
      </form>
    </div>
    </div>
    )}
    </>
  )
}
