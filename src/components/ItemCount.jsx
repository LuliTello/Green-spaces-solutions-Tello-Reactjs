import React, {useState,useEffect} from 'react';
import './ItemCount.css';


export default function ItemCount({initial, stock, onAdd}) {

//contador
    const [cont, setCont] = useState(initial);

    useEffect(() => {
    console.log(cont)

    }, [])

//cambio
    useEffect(()=>{
       
    }, []);


  return (
    <div>
        <div className='contador'>
        <button disabled={cont<=0} className='btn-cont' onClick={()=>{
        setCont(cont-1)
      }}>-</button>
        <p className='contador-num'>{cont}</p>
      <button disabled={cont>=stock} className='btn-cont' onClick={()=>{
        setCont(cont+1)
      }}>+</button>
      </div>
        <button disabled={stock<=0} className='btn-agregarCarrito' onClick={()=>onAdd(cont)}>Agregar al carrito</button>
       </div>
  )
}
