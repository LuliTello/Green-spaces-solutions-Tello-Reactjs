import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../css/Item.css';

export default function Item({el}) {

  return (
    <div className='card'>
      
        <Card className='card-item' style={{ width: '18rem', }}>
      <Card.Img className='card-image' variant="top" src={el.image} alt={el.image} />
      <Card.Body>
        <Card.Title className='card-title'>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.description}</Card.Subtitle>
        <Card.Text style={{marginTop:'1rem'}} >Presentacion x {el.unit}</Card.Text>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Card.Text className='card-price'> USD {el.price} </Card.Text>
        <Link className='link-detalle' to={`/item/${el.id}`} variant="success">Ver Detalle</Link>
        </div>
        <Card.Text style={{marginTop:'1rem'}} >Stock disponible {el.stock}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
