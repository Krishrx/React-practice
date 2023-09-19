import React, { createContext, useState } from 'react'
import Children from './Children';

export const ThemeContext = createContext();

function Parent() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Children/>
    </ThemeContext.Provider>
  )
}

export default Parent;