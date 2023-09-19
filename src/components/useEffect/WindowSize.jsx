import React, { useEffect, useState } from 'react'

function WindowSize() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
        return () => {
            window.removeEventListener('resize', setWindowWidth(window.innerWidth))
        }
    }, [windowWidth])


  return (
    <div className='flex justify-center m-5'>
        {windowWidth}
    </div>
  )
}

export default WindowSize