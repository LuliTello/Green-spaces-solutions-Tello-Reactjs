import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';



export default function ItemDetailContainer() {

    
    const [Item, setItem] = useState([]);

    useEffect(() => {
        
       setTimeout(()=>{
        fetch("/productos.json")
      .then((res)=>res.json())
      .then((resJson)=>{
        console.log(resJson);
        setItem(resJson);
      })
      .catch((e)=>{
        console.log(e)
      })
    },2000)
    
    }, [])
    
  return (
    <div>
           
        <ItemDetail producto = {Item[0]} />
       
        
    </div>
  )
}
