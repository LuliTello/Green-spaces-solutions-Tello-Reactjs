import React from 'react'
import { useState, createContext } from 'react';


export const cartContext = createContext();

export default function CartContext({children}) {

    
const [darkMode, setDarkMode] = useState(false);

const [carrito, setCarrito] = useState([]);

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

const isInCart = (id) => {
    return carrito.find(product=>product.id === id) ? true : false;
}

const removeItem = (id) => setCarrito(carrito.filter(product=>product.id !==id));

const clear = ()=> setCarrito([]);



  return (
    <cartContext.Provider value={{darkMode, setDarkMode, carrito,  addItem, isInCart, removeItem, clear }} >
        {children}
    </cartContext.Provider>
  )
}
