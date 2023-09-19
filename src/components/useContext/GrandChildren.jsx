import React from 'react'
import Button from '../../shared/Button'
import { useTheme } from './ThemeProvider'

function GrandChildren() {
    const { theme, toggleTheme } = useTheme();
    
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