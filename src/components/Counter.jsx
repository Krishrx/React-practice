import React, { useState } from 'react'
import Button from '../shared/Button';

function Counter() {
    const [count, SetCount] = useState(0);

    const add = () => {
        SetCount(prevCount => prevCount + 1);
    }
    const sub = () => {
        SetCount(count - 1);
    }
  return (
    <div className='flex flex-col items-center justify-center'>
          <h1>{count}</h1>
          <div className='space-x-4'>
            <Button btnLabelText={'+'} fn={add}/>
            <Button btnLabelText={'-'} fn={sub}/>
          </div>
          
    </div>
  )
}

export default Counter