import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer({greetingMensaje}) {
 const onAdd = (valor) =>{
    console.log(valor)
 }
 
  return (
    <div style={{ padding:'5rem 0', backgroundColor:'#ffebcd'}}>
      
    <p style={{color:'#1b832a',fontSize: '2rem',
   fontWeight: 'bold', fontStyle: 'italic'}}>{greetingMensaje}</p>
       <ItemCount initial={0} stock={25} onAdd={onAdd}/>
        <ItemList/>
     </div>
  )
}
