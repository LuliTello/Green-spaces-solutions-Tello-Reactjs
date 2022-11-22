import React from 'react'
import { useState, createContext, useEffect } from 'react';


export const cartContext = createContext();

export default function CartContext({children}) {

const [carrito, setCarrito] = useState([]);
const [totalAPagar, setTotalAPagar] = useState([])
//verificar si esta el producto en el carrito
const isInCart = (id) => carrito.find(product=>product.id === id) ? true : false;

//agregar productos
function addItem (item, cantidad){
    let newCarrito;
    let product = carrito.find(product => product.id === item.id);
    if(product){
        product.cantidad ++;
        newCarrito = [...carrito];
    } else {
        product = {...item, cantidad:cantidad};
        newCarrito = [...carrito, product];
    }
    setCarrito(newCarrito)
    console.log(newCarrito)
}

//remover producto del carrito
const removeItem = (id) => setCarrito(carrito.filter(product=>product.id !==id));

//borrar todo el carrito
const clear = ()=> setCarrito([]);

//total precio
const totalPrice = () => carrito.reduce((acc,product) => acc + product.cantidad * product.price, 0);


//total productos
const totalProducts = () => carrito.reduce((acc,product)=> acc + product.cantidad, 0);

useEffect(() => {
  const total = carrito.reduce((acc, product)=> acc + product.cantidad * product.price, 0);
  setTotalAPagar(total)
}, [carrito])

  return (
    <cartContext.Provider value={{carrito, setCarrito, addItem, isInCart, removeItem, clear, totalPrice, totalProducts, totalAPagar }} >
        {children}
    </cartContext.Provider>
  )
}
