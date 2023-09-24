import React from 'react'

function Input({type,name,placeholder,width}) {
  return (
      <input type={type||'text'} name={name} placeholder={placeholder} className={`outline-orange-600 border border-orange-400 rounded-md p-3 w-[${width}%] `} />
  )
}

export default Input