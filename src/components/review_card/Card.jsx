import React from 'react'

function Card({load}) {
    const{ image, name } = load;
  return (
    <div className='max-w-[500px] h-full relative px-5'>
        <img src={image} alt="person" className='w-20 h-20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover'/>
    <div className='p-5 text-center  bg-gray-50 w-full rounded-lg pt-14'>
        <h2 className='font-semibold text-violet-900 text-xl'>{name}</h2>
        <p className='px-4 py-6 text-lg text-gray-500 font-medium'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta sunt inventore possimus placeat sequi veniam aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos soluta eius non expedita quia aspernatur necessitatibus porro suscipit provident?</q></p>
    </div>
    </div>
  )
}

export default Card