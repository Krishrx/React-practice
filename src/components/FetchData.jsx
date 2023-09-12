import React from 'react'

function FetchData({data}) {
  return (
    <div className='w-full h-full p-4 pt-12 font-medium flex flex-col items-center  text-center'>
      <p>{data}</p>
    </div>
  )
}

export default FetchData;