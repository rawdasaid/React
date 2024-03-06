import React, { useState } from 'react'

export default function Taspiix() {
    const [counter, setcounter] = useState(0)
    const handleincrement=()=>{
        setcounter(counter +1)

    }
    const handledecrement=()=>{
      setcounter(counter -1)

    }
    const handlereset=()=>{
      setcounter(counter >0

    }


  return (
    <div>
    <div>
            <p className='text-center text-7xl mt-32'>{counter}</p>
        <div className=' mt-5 text-center p-6'>
        <button onClick={handleincrement} className='bg-yellow-500 text-white text-2xl rounded py-4 px-4 '>Increment</button>
        <button  onClick={handledecrement}  className='bg-blue-500 text-white text-2xl rounded py-4 px-4'>Decrement</button>
        <button onClick={handlereset} className='bg-red-500 text-white text-2xl rounded py-4 px-4 '>Reset</button>
        </div>
        </div>
        </div>
  )
}
