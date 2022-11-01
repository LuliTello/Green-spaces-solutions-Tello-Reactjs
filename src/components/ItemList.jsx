import React from 'react'
import { useState, useEffect } from 'react';
import ciper from '../assets/Ciper.jpg';
import glifo from '../assets/Glifo.webp';
import cletodim from '../assets/Cletodim.jpg';
import dimetoato from '../assets/Dimet.jpg';
import urea from '../assets/urea.webp';
import spt from '../assets/SPT.webp';
import Item from './Item';
import './ItemList.css'

export default function ItemList() {
    const Productos=[
        {id:1, image: glifo, name:'Glifosato', description:'Herbicida hoja ancha', price: 150 },
        {id:2, image: cletodim, name:'Cletodim', description:'Herbicida graminicida', price: 200 },
        {id:3, image:dimetoato, name:'Dimetoato', description:'Insecticida sistemico', price: 150 },
        {id:4, image: ciper, name:'Cipermetrina', description:'Insecticida de contacto', price: 150 },
        {id:5, image:urea, name:'Urea', description:'Fertilizante con nitrogeno', price: 150 },
        {id:6, image:spt, name:'Superfosfato Triple', description:'Fertilizante con fosforo', price: 150 },
    ];
    const [Listado, setListado]= useState([]);

    useEffect(() => {
      let render = new Promise ((res, rej)=>{
        setTimeout(()=>{
            res(Productos)
        },2000);
      })

      render.then((res)=>{
        setListado(res)
        console.log(res)
      })
      .catch((e)=>{
        console.log(e)
      })
    
    }, [])
    
  return (
    <div className='card-container'>
        {
        Listado.map(el => {
           return <Item key={el.id} image={el.image} name={el.name} description={el.description} price={el.price} />
        })
    }
        </div>
    )
}