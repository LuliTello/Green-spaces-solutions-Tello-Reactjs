import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

export default function ItemDetail({item}) {

    const onAdd = (valor) =>{
        console.log(valor)
     }

  return (
    <div> <Card style={{ width: '18rem', }}>
    <Card.Img className='card-image' variant="top" src={item.image} alt={item.image} />
    <Card.Body>
      <Card.Title className='card-title'>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
      <Card.Text className='card-price'>
        USD {item.price}
      </Card.Text>
      <ItemCount initial={0} stock={25} onAdd={onAdd}/>
    </Card.Body>
  </Card></div>
  )
}
