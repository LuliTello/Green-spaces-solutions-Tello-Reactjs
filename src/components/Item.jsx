import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';

export default function Item({image, name, description, price, id}) {
  return (
    <div>
        <Card style={{ width: '18rem', }}>
      <Card.Img className='card-image' variant="top" src={image} alt={image} />
      <Card.Body>
        <Card.Title className='card-title'>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <Card.Text className='card-price'>
          USD {price}
        </Card.Text>
        <Button id={id} variant="success">Agregar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
