  import React, { useState } from 'react'
  import { TiPlus } from "react-icons/ti";
  import { TiMinus } from "react-icons/ti";

  const Card = ({value, index, handleClick}) => {

  const {image, name, weight, price, isAdded } = value;

  const [productQuantity, setProductQuantity] = useState(value);

  const handleQuantity = (index, type)=>{
    if(type === 'plus'){
      setProductQuantity((prevQuantity) => prevQuantity + 1);
    }
    else if(type === 'minus'){
      setProductQuantity((prevQuantity) => prevQuantity - 1);
    }  

  }

    return (
      <div  className="Card w-44 h-62 border-2 flex flex-col mt-10 p-3 items-center justify-center rounded-lg overflow-hidden">
          <div className="img w-32 h-32 -mt-2">
            <img src={image} alt="" />
          </div>
          <div className="name font-semibold text-sm w-full">
            <div className='whitespace-wrap flex items-start h-10 overflow-hidden text-ellipsis'>
            <h1 className=''>{name}</h1>
            </div>
            <p className='mt-3 text-xs text-gray-500'>{weight}</p>
          </div>
          <div className="btn flex w-full items-center justify-between mt-3">
          <p className='text-xs font-semibold'>₹ {price}</p>
          
          <button onClick={() => {handleClick(index)}}
      className={`w-[4.2rem] border-2 border-green-600 rounded-md h-[2.2rem] font-semibold ${isAdded ? " bg-green-600 text-white": "bg-white text-green-600"} text-sm`}>
          {isAdded ? "ADDED" : "ADD"}
        </button>

          
        
          </div>
      </div>  
    )
  }

  export default Card