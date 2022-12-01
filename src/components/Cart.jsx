import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import Button from "react-bootstrap/Button";
import "../css/Cart.css";

export default function Cart() {
  const { cart, clear, totalToPay } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <>
        <div style={{ margin: "1rem auto", textAlign: "center" }}>
          <p className="texto_seguir">No hay productos en el carrito.</p>
          <Link style={{color:'#000'}} className="btn_seguir" to="/">
            Seguir comprando
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="contenido" style={{ padding: "2rem 0" }}>
      <div className="itemCart__flex">
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
      </div>
      <div className="contenedor_btn">
        <h3 className="texto_total">Total Compra USD: {totalToPay}</h3>

        <Button className="clear_btn" variant="success" onClick={() => clear()}>
          VACIAR CARRITO
        </Button>

        <Button variant="success" className="fin_btn" onClick={() => totalToPay}>
          <Link style={{color:'#000'}}className="fin_link" to="/checkout">
            COMPRAR CARRITO
          </Link>
        </Button>
      </div>
    </div>
  );
}
