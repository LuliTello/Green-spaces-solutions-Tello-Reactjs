import React from 'react'
import Item from './Item';
import './ItemList.css'

export default function ItemList({Listado}) {

  return (
    <div className='card-container'>
      {!Listado.length && "Loading..."}
        {
        Listado.map((el) => {
           return <div key={el.id}> <Item image={el.image} name={el.name} description={el.description} price={el.price} /></div>
        })
    }
        </div>
    )
}