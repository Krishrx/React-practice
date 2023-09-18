import React,{useState} from 'react'
import Input from '../shared/Input';
import {options as countryList} from '../data/countryList'


function Main() {

  const countryOptions = countryList.map(({ value, label }) => {
    return (
      <option key={label} value={value}>
        {''}
      {label}
    </option>
    )
  })

  const initialData = {
    fName: '',
    email: '',
    phno: '',
    dob: '',
    gender: '',
    skills: {
      html: false,
      css: false,
      js: false 
    },
    country: '',
    bio: '',
    file: ''
    
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevData => {
        return {
        ...prevData, skills: {
        ...prevData.skills,[name]: checked
        }
      }
  });
      
    }
    else if (type === 'file') {
      setFormData({
        ...formData, [name]: e.target.files[0]
      })
      console.log(e.target.files[0]);
    }
    else {
      setFormData({
        ...formData,[name]:value
      })
    }
  }

  return (
    <div className='m-5 p-5 flex flex-col space-y-4 bg-pink-50 '>
      <Input type={'text'} name={'fName'} displayText={'First Name'} fn={handleChange} />
      <Input type={'email'} name={'email'} displayText={'Email Id'} fn={handleChange} />
      <Input type={'number'} name={'phno'} displayText={'Phone Number'} fn={handleChange} />
      <Input type={'date'} name={'dob'} displayText={'Date of Birth'} fn={handleChange} />

      <div className='flex justify-center items-center space-x-4'>
      <Input type={'radio'} name={'gender'} id={'male'} displayText={'Male'} fn={handleChange} checked={formData.gender === 'male'} value={'male'}/>
      <Input type={'radio'} name={'gender'} id={'female'} displayText={'Female'} fn={handleChange} checked={formData.gender === 'female'} value={'female'}/>
      <Input type={'radio'} name={'gender'} id={'other'} displayText={'Other'} fn={handleChange} checked={formData.gender === 'other'} value={'other'}/> 
      </div>

      <div className='flex justify-center items-center space-x-4'>
      <Input type={'checkbox'} name={'html'} fn={handleChange} displayText={'Html'} />
      <Input type={'checkbox'} name={'css'} fn={handleChange} displayText={'Css'} />
      <Input type={'checkbox'} name={'js'} fn={handleChange} displayText={'Js'} />
      </div>

      <Input type={'select'} fn={handleChange} name={'country'} displayText={'Country'} value={formData.country} selectOptions={countryOptions} />
      
      <Input type={'textarea'} textPlaceholder={'Write something...'} name={'bio'} displayText={'Bio'} fn={handleChange}/>

      <Input type={'file'} name={'resume'} displayText={'Upload resume'} fn={handleChange} />

    </div>
  )
}

export default Main