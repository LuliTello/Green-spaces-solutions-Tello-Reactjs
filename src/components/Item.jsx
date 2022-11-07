import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Item.css';

export default function Item({el}) {
  return (
    <div className='card'>
      
        <Card style={{ width: '18rem', }}>
      <Card.Img className='card-image' variant="top" src={el.image} alt={el.image} />
      <Card.Body>
        <Card.Title className='card-title'>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.description}</Card.Subtitle>
        <Card.Text className='card-price'>
          USD {el.price}
        </Card.Text>
        <Link className='link-detalle' to={`/item/${el.id}`} variant="success">Ver Detalle</Link>
      </Card.Body>
    </Card>
    </div>
  )
}
