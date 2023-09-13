import React from 'react'

function TextBox({ type,name,labelName,fn,value }) {
  return (
    <div className='p-5 flex justify-evenly space-x-4'>
        <label htmlFor={name}>{labelName}</label>
        <input type={type} name={name} value={value} onChange={fn} className='rounded-md' required/>  
    </div>
  )
}

export default TextBox