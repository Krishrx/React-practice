import React from 'react'

function FetchButton(props) {
  return (
    <div className='w-full h-fit  p-2 pb-5 font-medium flex flex-col items-center justify-end'>
          <button className='bg-purple-700 text-white px-4 py-2 rounded-md' onClick={props.fn}>What to Do?</button>
    </div>
  )
}

export default FetchButton;