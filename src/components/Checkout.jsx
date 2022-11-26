import React, {useContext} from 'react';
import { useState } from 'react';
import { cartContext } from './CartContext';
import '../css/Checkout.css';
import {addDoc, collection, doc, getFirestore, increment, updateDoc} from 'firebase/firestore';

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
      /*carrito.forEach(item=>{
        const documento = doc(db, 'productos', item.id);
        updateDoc(documento, { stock: increment(-item.stock) });
      });*/
      
      clear();
    })
}

  return (
    <>
    {pedidoInsertadoId ? (
      "Gracias por su compra! El detalle llegará en breve a su email. El N° de pedido es: " + pedidoInsertadoId
       ) : (
    <div >
      <h2 className='check_titulo'>Ingrese sus datos para terminar la compra</h2>
      
    <div>
      <form className='formulario'>
      <input type="text" placeholder='Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
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
