import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Outlet,Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuBar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-10/12 px-2 py-4 flex justify-between items-center relative'>
      <h1 className='font-bold text-2xl'>WCD</h1>
      
      <nav>
        {isMenuOpen?<X className='md:hidden cursor-pointer relative z-10' onClick={handleMenuBar} />:<Menu className='md:hidden cursor-pointer relative z-10' onClick={handleMenuBar} />
        }
        <ul
          className={`${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } flex flex-col justify-center items-center w-full absolute text-slate-600 bg-orange-50 left-0 top-0 py-14 space-y-5 transition-transform duration-300 ease-in-out rounded-b-2xl md:space-x-4  md:static md:flex-row md:py-0 md:space-y-0 md:rounded-none md:bg-transparent md:translate-y-0`}
        >
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Header;
