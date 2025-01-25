import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount((prev) => prev + 1)
    }

    const decermentCounter = () => {
        setCount((prev) => prev - 1)
    }

  return (
    <div>
      <div className='bg-gray-700 text-white h-[200px]'>
        <h1 className='text-center font-bold text-3xl'>Counter : {count}</h1>
        <button onClick={incrementCounter} className='text-white bg-blue-500 m-3 p-2 rounded'>Increment</button> 
        <button onClick={decermentCounter} className='text-white bg-blue-500 m-3 p-2 rounded'>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
