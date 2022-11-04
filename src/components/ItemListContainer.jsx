import React from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {Productos} from './data.js';
import ItemList from './ItemList'

export default function ItemListContainer({greetingMensaje}) {
 const onAdd = (valor) =>{
    console.log(valor)
 }
 
 const {idcategory} = useParams();


    const [Listado, setListado]= useState([]);

    useEffect(() => {
      let render = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(Productos)
        },2000);
      })

      render.then((res)=>{
         if (idcategory){
            setListado(res.filter((item) => item.category === idcategory));
         } else {
            setListado(res)
         }
        
        console.log(res)
      })
      .catch((e)=>{
        console.log(e)
      })
    
    }, [idcategory])
    
  return (
    <div style={{ padding:'5rem 0', backgroundColor:'#ffebcd'}}>
      
    <p style={{color:'#1b832a',fontSize: '2rem',
   fontWeight: 'bold', fontStyle: 'italic'}}>{greetingMensaje}</p>
       <ItemCount initial={0} stock={25} onAdd={onAdd}/>
        <ItemList Listado = {Listado}/>
     </div>
  )
}
