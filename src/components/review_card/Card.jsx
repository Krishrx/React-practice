import React from 'react'
import myImage from '../../assets/avatar_portfolio_black.jpg';

function Card() {
  return (
      <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
          <p className='text-2xl font-mono font-semibold text-violet-900'>What they've said</p>
        <div className='bg-purple-100 w-full p-10 py-14 flex flex-col md:flex-wrap md:flex-row md:space-y-0 gap-4 space-y-8 justify-center items-center'>
            
            <div className='max-w-[500px] h-full relative mb-10'>
                <img src={myImage} alt="person" className='w-20 h-20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
            <div className='p-5 text-center  bg-gray-50 w-full rounded-lg pt-14'>
                <h2 className='font-semibold text-violet-900 text-xl'>Krish</h2>
                <p className='px-4 py-6 text-lg text-gray-500 font-medium'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta sunt inventore possimus placeat sequi veniam aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos soluta eius non expedita quia aspernatur necessitatibus porro suscipit provident?</q></p>
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default Card