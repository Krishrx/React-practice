import React, { useState } from 'react'
import Button from '../../shared/Button'
import genHexColorArray from './ColorArray'
import ColorBox from './ColorBox'

function ColorBoxContainer() {
    const [colorArr, setColorArr] = useState(genHexColorArray());

    const generateColor = () => {
        setColorArr(genHexColorArray());
    }

    const populateColors = () => {
        let arr;
        arr = colorArr.map((color, index) => (
            <ColorBox key={index} color={color} />
        ));
        return arr;
    }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='flex justify-center'>
              <Button btnLabelText={'Generate'} customStyle={'bg-rose-500 font-medium text-white hover:bg-rose-600'} fn={generateColor}/>
          </div>
          <div className='w-full md:w-6/12 flex flex-wrap justify-center items-center px-2 py-4 gap-4 '>
              {populateColors()}
          </div>
    </div>
  )
}

export default ColorBoxContainer