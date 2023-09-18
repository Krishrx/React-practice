import React from 'react';

export function InputCheckBox({name,customStyle,displayText,fn,value}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <input type='checkbox' id={name} className={style} name={name} onChange={fn} value={value}/>
                <label htmlFor={name}>{displayText}</label>
            </div>
        )   
}

export function InputRadio({name,customStyle,displayText,fn,value,checked,id}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <input type='radio' id={id} className={style} onChange={fn} checked={checked} value={value} name={name} />
                <label htmlFor={id}>{displayText}</label>
            </div> 
        )
}

export function InputSelect({name,customStyle,displayText,fn,value,selectOptions}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label>
                <select name={name} id={name} value={value} onChange={fn}>
                    {selectOptions}
                </select>    
            </div> 
        )
}


export function InputTextArea({name,customStyle,displayText,fn,value,textPlaceholder}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label><br />
                <textarea className='p-2' name={name} id={name} cols="120" rows="10" onChange={fn} value={value} placeholder={textPlaceholder}></textarea>
            </div> 
           
        )
}

export function InputFile({name,customStyle,displayText,fn}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label>
                <input type={'file'} id={name} name={name} className={style} onChange={fn}/>
            </div>
        )
}


function Input({type,name,customStyle,displayText,fn,value}) {
  let defaultStyle = ' px-3 py-1 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
        return (
            <div className='space-x-4 flex justify-center items-center'>
                <label htmlFor={name}>{displayText}</label>
                <input type={type} id={name} name={name} className={style} onChange={fn} value={value} />
            </div>
        )
}



export default Input;