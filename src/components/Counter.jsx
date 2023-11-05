import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
    const count = useSelector(state => state.counter.value);
    /* the counter in above(state.counter.value) should match store.js reducer 
    (i.e) reducer: {
        counter:counterReducer
    }*/
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center items-center p-5'>
          <h1>Count is {count}</h1>
          <div className='space-x-4 p-5'>
              <button onClick={()=>dispatch(increment())} className='bg-green-500 px-4 py-2 rounded-md text-white'>+</button>
              <button onClick={()=>dispatch(decrement())} className='bg-red-500 px-4 py-2 rounded-md text-white'>-</button>
          </div> 
    </div>
  )
}

export default Counter