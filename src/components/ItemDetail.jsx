import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ItemDetail({item}) {

    const onAdd = (valor) =>{
        console.log(valor)
     }

  return (
    <div> 
      {item.id ? (
        <>
      
      <Card className='card-detail' style={{ width: '35rem' }}>
        <div>
    <Card.Img className='card-image' variant="top" src={item.image} alt={item.image} />
    </div>
    <div>
    <Card.Body>
      <Card.Title className='card-title'>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
      <Card.Text className='card-price'>
        USD {item.price}
      </Card.Text>
      
      <ItemCount initial={0} stock={25} onAdd={onAdd}/>
      <Card.Text> *Precio por {item.unit}</Card.Text>
    </Card.Body>
    </div>
  </Card>

  </>
  ) : (
    <>
   <ProgressBar variant='success' animated now={45} />
    </>
  )}
  </div>
  )
}
