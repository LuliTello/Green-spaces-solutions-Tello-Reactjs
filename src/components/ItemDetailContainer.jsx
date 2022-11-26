import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function ItemDetailContainer() {
 
    const {iditem} = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
      const db = getFirestore();
    const docSinNorm = doc(db, 'productos', iditem)
    getDoc(docSinNorm).then((res=> setItem({id: res.id, ...res.data()})))

  }, [iditem])
    
  return (
    <div >
           
        <ItemDetail item = {item} />   
        
    </div>
  )
}
