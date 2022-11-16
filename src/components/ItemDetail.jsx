import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useState } from 'react';
import './ItemDetail.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContext';
import { useContext } from 'react';

export default function ItemDetail({item}) {

  const [cart, setCart] = useState(false);

  const { addItem} = useContext(cartContext)
    const onAdd = (cantidad) =>{
        setCart(true);
        addItem(item, cantidad)
        console.log(`compraste ${cantidad} unidades`);
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
      <Card.Text>Stock disponible:</Card.Text>
      {
        cart ? <Link className='btn-finalizar' to={"/cart"} >Finalizar compra</Link> : <ItemCount initial={1} stock={25} onAdd={onAdd}/>
      }
      
      <Card.Text style={{marginTop:'1rem'}} > *Precio por {item.unit}</Card.Text>
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
