import React from 'react'

function SubmitBtn({fn}) {
  return (
    <div className='p-5 flex justify-evenly'>
          <button onClick={fn} className='py-2 px-4 bg-pink-600 text-white font-medium rounded-md' >Sumbit</button>
    </div>
  )
}

export default SubmitBtn