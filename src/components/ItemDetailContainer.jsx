import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";
import {Productos} from './data.js';

export default function ItemDetailContainer() {

 
    const {iditem} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
      let productosDetail = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(Productos.find((item) => item.id == iditem))
        },2000);
      })

      productosDetail.then((res)=>{
        setItem(res)
        console.log(res)
      })
      .catch((e)=>{
        console.log(e)
      })
    
    }, [iditem])
    
  return (
    <div>
           
        <ItemDetail item = {item} />
       
        
    </div>
  )
}
