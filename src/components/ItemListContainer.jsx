import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Productos } from '../data/data.js';
import ItemList from './ItemList';

export default function ItemListContainer({}) {
 
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
    <div style={{ padding:'2rem 0', backgroundColor:'rgb(253, 246, 227) '}}>       
        <ItemList Listado = {Listado}/>
     </div>
  )
}
