import React, {useContext} from 'react';
import { useState } from 'react';
import { cartContext } from './CartContext';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

export default function Checkout() {

const {carrito, totalAPagar, clear } = useContext(cartContext);
const [nombre, setNombre] = useState('');
const [tel, setTel] = useState('');
const [email, setEmail] = useState('');
const [pedidoInsertadoId, setPedidoInsertadoId] = useState('');

function handleClickBuyButton(){
    const pedido = {
      comprador: {name:nombre, tel: tel, email:email},
      carrito: carrito,
      total: totalAPagar,
    };
    //console.log(pedido)
    const db = getFirestore();
    const pedidos = collection(db, 'pedidos');
    addDoc(pedidos, pedido).then(({id})=>{
      setPedidoInsertadoId(id);
      clear();
    })
}

  return (
    <>
    {pedidoInsertadoId ? (
      "Gracias por su compra! El N° de pedido es: " + pedidoInsertadoId 
       ) : (
    <div >
      <h2>Ingrese sus datos para terminar la compra</h2>
      <div>
      {carrito.map((item)=>(
        <p key={item.id}>{item.name + '' + item.price + '' + item.cantidad}</p>
      ))}
    </div>
    <div>Total a pagar: USD {totalAPagar}</div>
    <div>
      <input type="text" placeholder='nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <input type="number" placeholder='Telefono' value={tel} onChange={(e)=>setTel(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button type='button' onClick={handleClickBuyButton} value="Comprar"></button>
    </div>
    </div>
    )}
    </>
  )
}
