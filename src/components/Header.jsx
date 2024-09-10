import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
   <header className='bg-white'>
    <nav className='flex justify-between items-center border-b-2 border-[#dadada] w-[90%] mx-auto py-8'>
        <img src={logo} alt="" className='w-[180px]'/>
        <w3m-button />
        </nav>
   </header>
  )
}

export default Header