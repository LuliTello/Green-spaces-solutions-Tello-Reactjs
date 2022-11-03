import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemDetail({producto}) {
  return (
    <div> <Card style={{ width: '18rem', }}>
    <Card.Img className='card-image' variant="top" src={producto.image} alt={producto.image} />
    <Card.Body>
      <Card.Title className='card-title'>{producto.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{producto.description}</Card.Subtitle>
      <Card.Text className='card-price'>
        USD {producto.price}
      </Card.Text>
      <Button id={producto.id} variant="success">Ver mas</Button>
    </Card.Body>
  </Card></div>
  )
}
