import React, { useContext } from 'react'
import {ThemeContext} from './Parent'
import Button from '../../shared/Button'

function GrandChildren() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const themeColor = {
        backgroundColor: (theme === 'light') ? 'lightgray' : 'darkgray'
    }
  return (
      <div className='w-80 h-80 m-5 flex flex-col justify-center items-center space-y-2' style={themeColor}>
          <p>I am Parent</p>
          <Button btnLabelText={'Change'} customStyle={'bg-yellow-200'} fn={toggleTheme}/>
      </div>
  )
}

export default GrandChildren