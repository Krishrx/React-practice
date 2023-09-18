import React from 'react';

function Input({type,name,customStyle,displayText,fn,value,checked,selectOptions,textPlaceholder,id}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`

    if (type === 'checkbox') {
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <input type='checkbox' id={name} className={style} onChange={fn} />
                <label htmlFor={name}>{displayText}</label>
            </div>
        )
    }
    else if (type === 'radio') {
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <input type='radio' id={id} className={style} onChange={fn} checked={checked} value={value} name={name} />
                <label htmlFor={id}>{displayText}</label>
            </div> 
        )
    }
    else if (type === 'select') {
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label>
                <select name={name} id={name} value={value} onChange={fn}>
                    {selectOptions}
                </select>    
            </div> 
        )
    }
    else if (type === 'textarea') {
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label><br />
                <textarea className='p-2' name={name} id={name} cols="120" rows="10" onChange={fn} placeholder={textPlaceholder}></textarea>
            </div> 
           
        )
    }
    else {
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label>
                <input type={type} id={name} className={style} onChange={fn} />
            </div>
        )
    }
}



export default Input;