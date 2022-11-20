import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCart.css';
import { useContext } from 'react'
import { cartContext } from './CartContext'

export default function ItemCart({product}) {

    const {removeItem} = useContext(cartContext);
  return (
    <div className='itemCart__flex'>
        <Card className='cardCart' style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'15rem'}}  src={product.image} alt={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>{product.description}</Card.Subtitle>
        <Card.Text style={{marginTop:'1rem', fontWeight:'bold'}}>Cantidad {product.cantidad}</Card.Text>
        <Card.Text>Precio USD {product.price}</Card.Text>
        <Card.Text>Subtotal USD {product.cantidad * product.price}</Card.Text>
        <Button variant="success" onClick={()=> removeItem(product.id)}>Eliminar producto</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
