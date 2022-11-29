import React from 'react'
import Item from './Item';
import '../css/ItemList.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ItemList({listado}) {

  return (
    <div className='card-container'>
      {!listado.length && <ProgressBar variant='success' animated now={45} />}
        {
        listado.map((el) => {
           return <div key={el.id}> 
           
           <Item el={el} /></div>
        })
    }
        </div>
    )
}