import React from 'react'
import Input from '../../../shared/Input'
import Button from '../../../shared/Button'
import Header from '../Header'
function Login() {

    const handleLogin = () => {
        alert('logged in !!!');
    }
    return (
        <>
        <div className='w-full flex justify-center'>
        <Header/>
       </div>
      <div className='w-full h-full flex justify-center px-2 py-4'>
          <div className='flex flex-col justify-center items-center w-10/12 md:w-6/12 space-y-5 shadow-lg rounded-lg py-6'>
              <div className='flex flex-col justify-center items-center w-6/12 md:w-6/12 space-y-5'>
                  <h1 className='uppercase font-medium text-2xl'>Log in</h1>
                  <Input type={'email'} width={100} placeholder={'Email'} name={'email'} />
                  <Input type={'password'} width={100} placeholder={'Password'} name={'password'} />
                  <Button btnLabelText={'Login'} fn={handleLogin} customStyle={'bg-orange-500 text-white'}/>
              </div>  
          </div>   
      </div>
      </>
  )
}

export default Login