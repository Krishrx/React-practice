import React from 'react'

function SearchBar() {
  return (
    <div className='my-5 w-10/12 text-center'>
          <input type="search" className='w-11/12 bg-orange-100 h-20 rounded-full border border-orange-500 focus:ring-1 focus:ring-orange-300 px-8 py-2 text-2xl md:w-1/2' placeholder='Search countries by name and city '/>
    </div>
  )
}

export default SearchBar