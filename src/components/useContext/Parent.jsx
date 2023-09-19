import React from 'react'
import Children from './Children';
import ThemeProvider from './ThemeProvider';

function Parent() {

  return (
    <ThemeProvider>
        <Children/>
    </ThemeProvider>
  )
}

export default Parent;