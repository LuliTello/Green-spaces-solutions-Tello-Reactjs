import React from 'react'
import { useState, createContext } from 'react';


export const cartContext = createContext();

export default function CartContext({children}) {

    
const [darkMode, setDarkMode] = useState(false);

const [carrito, setCarrito] = useState([]);

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

//verificar si esta el producto en el carrito
const isInCart = (id) => carrito.find(product=>product.id === id) ? true : false;

//remover producto del carrito
const removeItem = (id) => setCarrito(carrito.filter(product=>product.id !==id));

//borrar todo el carrito
const clear = ()=> setCarrito([]);

//total precio
const totalPrice = () => carrito.reduce((acc,product) => acc + product.cantidad * product.price, 0);


//total productos
const totalProducts = () => carrito.reduce((acc,product)=> acc + product.cantidad, 0);


  return (
    <cartContext.Provider value={{darkMode, setDarkMode, carrito, setCarrito, addItem, isInCart, removeItem, clear, totalPrice, totalProducts }} >
        {children}
    </cartContext.Provider>
  )
}
