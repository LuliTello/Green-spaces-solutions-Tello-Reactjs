import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

export default function ItemListContainer() {
 
 const {idcategory} = useParams();

    const [listado, setListado]= useState([]);

    useEffect(() => {
      const db = getFirestore();
      let listado;
      if (idcategory){
      listado = query(collection(db, 'productos'), where ('category', '==', idcategory));
    } else {
      listado = collection(db, 'productos')  
    }
    
      getDocs(listado).then((res)=> {

        const arrayNorm = res.docs.map((element)=>{
          return {id: element.id , category: element.data().category, name: element.data().name, description: element.data().description, unit: element.data().unit, price: element.data().price, stock: element.data().stock, image: element.data().image}
        });

          setListado(arrayNorm)
      
    });
    }, [idcategory])
    
  return (
    <div style={{ padding:'2rem 0'}}>       
        <ItemList listado = {listado}/>
     </div>
  )
}
