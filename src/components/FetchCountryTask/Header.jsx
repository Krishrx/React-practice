import React from 'react'

function Header() {
  return (
    <div className='w-10/12 px-2 py-4 flex justify-between'>
          <h1 className='font-bold text-2xl'>WCD</h1>
          <nav>
              <ul className='flex justify-between space-x-4 text-slate-600'>
                  <li>About</li>
                  <li>Login</li>
                  <li>Register</li>
              </ul>
          </nav>
    </div>
  )
}

export default Header