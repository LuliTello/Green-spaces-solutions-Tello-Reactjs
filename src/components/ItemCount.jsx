import React, {useState,useEffect} from 'react';
import '../css/ItemCount.css';


export default function ItemCount({initial, stock, onAdd}) {

//contador
    const [count, setCount] = useState(initial);

    let add = () =>{
      if (count < stock){
      setCount(count + 1)
      }
    };

    let subtract = () =>{
      if (count > 0){
      setCount(count - 1)
      }
    };
    useEffect(() => {
      setCount(initial)

    }, [initial])

  return (
    <div>
        <div className='contador'>
        <button className='btn-cont' onClick={subtract}>-</button>
        <p className='contador-num'>{count}</p>
      <button className='btn-cont' onClick={add}>+</button>
      </div>
        <button disabled={stock<0} className='btn-agregarcart' onClick={()=>onAdd(count)}>Agregar al Carrito</button>
    </div>

  )
}
