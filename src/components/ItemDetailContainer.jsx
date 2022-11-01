import React from 'react';
import { useState, useEffect } from 'react';



export default function ItemDetailContainer() {

    
    const [Item, setItem] = useState([]);

    useEffect(() => {
        
       setTimeout(()=>{
        fetch("../productos.json")
      .then((res)=>res.json())
      .then((resJson)=>{
        console.log(resJson);
        setItem(resJson);
      })
      .catch((e)=>{
        console.log(e)
      })
    },5000)
    
    }, [])
    
  return (
    <div>itemdetail</div>
  )
}
