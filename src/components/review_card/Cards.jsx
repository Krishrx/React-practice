import React from 'react'
import {data} from '../../datas/reviewers'
import Card from './Card'

function Cards() {

    const cardComponent = data.map((d) => {
        return(<Card load={d} key={d.name}/>)
    })

  return (
    <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
        <p className='text-2xl font-mono font-semibold text-violet-900'>What they've said</p>
        <div className='bg-purple-100 w-full p-10 py-14 flex flex-col md:flex-wrap md:flex-row md:space-y-0 gap-4 space-y-8 justify-center items-center'>
            {cardComponent}
        </div>
    </div>
  )
}

export default Cards