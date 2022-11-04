import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Item.css';

export default function Item({image, name, description, price, id}) {
  return (
    <div className='card'>
      
        <Card style={{ width: '18rem', }}>
      <Card.Img className='card-image' variant="top" src={image} alt={image} />
      <Card.Body>
        <Card.Title className='card-title'>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <Card.Text className='card-price'>
          USD {price}
        </Card.Text>
        <Link id={id} to={"/item/"} variant="success">Ver Detalle</Link>
      </Card.Body>
    </Card>
    </div>
  )
}
