import React from 'react'
import { categories } from '../constants'

function NavLinks() {
  return (
    <nav>
      {categories.map{category => (
        <li>
          <a href="#" className='text-lg font-bold'>{category}</a>
          </li> 
      )})
          
      <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
        <li>
          <a href="#" className='text-lg font-bold'>Blog</a>
        </li>
        <li className=''>
          <a href="#" className='text-lg font-bold'>Contact</a>
        </li>
        <li>
          <a href="#" className='text-lg font-bold'>About</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks