import React, {useState,useEffect} from 'react';
import './ItemCount.css';


export default function ItemCount({initial, stock, onAdd}) {

//contador
    const [cont, setCont] = useState(initial);

    let sumar = () =>{
      if (cont < stock){
      setCont(cont + 1)
      }
    };

    let restar = () =>{
      if (cont > 0){
      setCont(cont - 1)
      }
    };
    useEffect(() => {
    console.log(cont)

    }, [])

//cambio
    useEffect(()=>{
       
    }, []);


  return (
    <div>
        <div className='contador'>
        <button className='btn-cont' onClick={restar}>-</button>
        <p className='contador-num'>{cont}</p>
      <button className='btn-cont' onClick={sumar}
      >+</button>
      </div>
        <button disabled={stock<0} className='btn-agregarCarrito' onClick={()=>onAdd(cont)}>Agregar al carrito</button>
    </div>

  )
}
