import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { useState } from "react";
import "../css/ItemDetail.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import { useContext } from "react";

export default function ItemDetail({ item }) {
  const [cart, setCart] = useState(false);

  const { addItem } = useContext(cartContext);
  const onAdd = (quantity) => {
    setCart(true);
    addItem(item, quantity);
  };

  return (
    <div>
      {item.id ? (
        <>
          <Card className="card-detail">
            <div>
              <Card.Img
                className="card-image"
                variant="top"
                src={item.image}
                alt={item.image}
              />
            </div>
            <div>
              <Card.Body>
                <Card.Title
                  style={{ marginTop: "1rem" }}
                  className="card-title"
                >
                  {item.name}
                </Card.Title>
                <Card.Subtitle
                  style={{ marginTop: "1rem" }}
                  className="mb-2 text-muted"
                >
                  {item.description}
                </Card.Subtitle>
                <Card.Text style={{ margin: "1rem" }} className="card-price">
                  Precio Unitario USD {item.price}
                </Card.Text>
                <Card.Text>Stock disponible: {item.stock}</Card.Text>
                {cart ? (
                  <div className="contenedor_btns">
                    {" "}
                    <Link className="btn-seguir" to={"/"}>
                      Seguir Comprando
                    </Link>{" "}
                    <Link className="btn-finalizar" to={"/cart"}>
                      Finalizar compra
                    </Link>
                  </div>
                ) : (
                  <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                )}

                <Card.Text style={{ marginTop: "2rem" }}>
                  {" "}
                  *Precio por {item.unit}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </>
      ) : (
        <>
          <ProgressBar variant="success" animated now={45} />
        </>
      )}
    </div>
  );
}
