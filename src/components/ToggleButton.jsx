import React from 'react'

function ToggleButton(props) {
  return (
    <div className='w-full h-full justify-self-end p-2 pb-5 font-medium flex flex-col items-center justify-end'>
          <button className='bg-purple-700 text-white px-4 py-2 rounded-md' onClick={props.fn}>LogIn/LogOut</button>
    </div>
  )
}

export default ToggleButton;