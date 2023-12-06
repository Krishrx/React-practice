import React,{useState} from 'react'
import {data} from '../../datas/reviewers'
import Card from './Card'

function Cards() {

  const [startIndex, setStartIndex] = useState(0);

  const cardComponent = data.slice(startIndex, startIndex + (window.innerWidth >= 768 ? 2 : 1)).map((d) => {
    return <Card load={d} key={d.name} />;
  });

  const handlePrevClick = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(data.length - (window.innerWidth >= 768 ? 2 : 1), startIndex + 1));
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center space-y-5'>
        <p className='text-2xl font-mono font-semibold text-violet-900'>What they've said</p>
        <div className='bg-purple-100 w-full p-10 py-14 flex flex-col md:flex-wrap md:flex-row md:space-y-0 gap-4 space-y-8 justify-center items-center'>
            {cardComponent}
        
        <div className='flex justify-between w-full max-w-screen-md mt-4'>
          <button onClick={handlePrevClick} className='text-white bg-purple-500 px-4 py-2 rounded-md'>
            Previous
          </button>
          <button onClick={handleNextClick} className='text-white bg-purple-500 px-4 py-2 rounded-md'>
            Next
          </button>
        </div>
        
        </div>
    </div>
  )
}

export default Cards