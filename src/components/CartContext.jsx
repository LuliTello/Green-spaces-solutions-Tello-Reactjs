import React from "react";
import { useState, createContext, useEffect } from "react";

export const cartContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalToPay, setTotalToPay] = useState([]);
  //verificar si esta el producto en el cart
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  //agregar productos
  function addItem(item, quantity) {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity++;
      newCart = [...cart];
    } else {
      product = { ...item, quantity: quantity };
      newCart = [...cart, product];
    }
    setCart(newCart);
    
  }

  //remover producto del cart
  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  //borrar todo el cart
  const clear = () => setCart([]);

  //total productos
  const totalProducts = () =>
    cart.reduce((acc, product) => acc + product.quantity, 0);

  //total precio
  useEffect(() => {
    const total = cart.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    setTotalToPay(total);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        isInCart,
        removeItem,
        clear,
        totalProducts,
        totalToPay,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
