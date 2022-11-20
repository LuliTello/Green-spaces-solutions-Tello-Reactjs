import React from 'react'
import Item from './Item';
import './ItemList.css'

export default function ItemList({listado}) {

  return (
    <div className='card-container'>
      {!listado.length && "Loading..."}
        {
        listado.map((el) => {
           return <div key={el.id}> 
           
           <Item el={el} /></div>
        })
    }
        </div>
    )
}