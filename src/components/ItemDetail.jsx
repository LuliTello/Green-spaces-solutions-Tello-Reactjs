import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ItemDetail({item}) {
  return (
    <div> <Card style={{ width: '18rem', }}>
    <Card.Img className='card-image' variant="top" src={item.image} alt={item.image} />
    <Card.Body>
      <Card.Title className='card-title'>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
      <Card.Text className='card-price'>
        USD {item.price}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}
