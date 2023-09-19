import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

