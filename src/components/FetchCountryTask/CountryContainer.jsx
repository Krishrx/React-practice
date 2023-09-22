import React from 'react'
import Country from './Country'
import PageTitle from './PageTitle'
import SearchBar from './SearchBar'
import Header from './Header'

function CountryContainer() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Header/>
      <PageTitle />
      <SearchBar/>
      <Country />
    </div>
  )
}

export default CountryContainer