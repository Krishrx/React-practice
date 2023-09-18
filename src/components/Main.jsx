import React,{useState} from 'react'
import Input from '../shared/Input';
import Button from '../shared/Button';
import {options as countryList} from '../data/countryList'


function Main() {

  const countryOptions = countryList.map(({ value, label }) => {
    return (
      <option key={label} value={value}>
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
      setFormData(prevData => {
        return {
          ...prevData, [name]: e.target.files[0]
        }
      }
  )
    }
    else {
      setFormData(prevData => {
        return {
          ...prevData,[name]:value
        }
      }
        
  )

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fName,
      email,
      phno,
      dob,
      gender,
      skills,
      country,
      bio,
      file
    } = formData;

    const formattedSkills = []
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }

    const finalData = {
      fName,
      email,
      phno,
      dob,
      gender,
      skills:formattedSkills,
      country,
      bio,
      file
    }

    console.log(finalData);

    // setFormData(prevData => {
    //     return {
    //       ...prevData,initialData
    //     }
    // })
    
    // console.log(formData);
  }

  const {
      fName,
      email,
      phno,
      dob,
      gender,
      skills,
      country,
      bio,
      file
    } = formData;

  return (
    <form className='m-5 p-5 flex flex-col space-y-4 bg-pink-50 ' onSubmit={handleSubmit}>
      <Input type={'text'} name={'fName'} displayText={'First Name'} fn={handleChange} value={fName}/>
      <Input type={'email'} name={'email'} displayText={'Email Id'} fn={handleChange} value={email}/>
      <Input type={'number'} name={'phno'} displayText={'Phone Number'} fn={handleChange} value={phno}/>
      <Input type={'date'} name={'dob'} displayText={'Date of Birth'} fn={handleChange} value={dob}/>

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

      <Input type={'textarea'} textPlaceholder={'Write something...'} name={'bio'} displayText={'Bio'} fn={handleChange} value={bio}/>

      <Input type={'file'} name={'file'} displayText={'Upload resume'} fn={handleChange} value={file} />
      <div className='flex justify-center'>
        <Button btnLabelText={'Submit'} customStyle={'bg-pink-400 text-white w-20'} fn={handleSubmit}/>
      </div>
    </form>
  )
}

export default Main