import React from 'react'

export default function ItemListContainer({greetingMensaje}) {
  return (
    <div style={{ padding:'5rem 0', backgroundColor:'#ffebcd'}}>
      
    <p style={{color:'#1b832a',fontSize: '2rem',
   fontWeight: 'bold', fontStyle: 'italic'}}>{greetingMensaje}</p>
       
     </div>
  )
}
