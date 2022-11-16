import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Item.css';
import { cartContext } from './CartContext';
import { useContext } from 'react';

export default function Item({el}) {

  const {darkMode, setDarkMode} = useContext(cartContext)
  return (
    <div className='card' style={{color: darkMode ? "white" : "black", backgroundColor: darkMode ? "black" : "white" }}>
      
        <Card style={{ width: '18rem', }}>
      <Card.Img className='card-image' variant="top" src={el.image} alt={el.image} />
      <Card.Body>
        <Card.Title className='card-title'>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.description}</Card.Subtitle>
        <Card.Text className='card-price'>
          USD {el.price}
        </Card.Text>
        <Card.Text style={{marginTop:'1rem'}} >Presentacion x {el.unit}</Card.Text>
        <Link className='link-detalle' to={`/item/${el.id}`} variant="success">Ver Detalle</Link>
      </Card.Body>
    </Card>
    <button onClick={()=>setDarkMode(!darkMode)}>Cambiar Dark</button>
    </div>
  )
}
