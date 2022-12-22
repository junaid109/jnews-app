import Link from 'next/link';
import React from 'react'
import Bars3Icon from './../node_modules/@heroicons/react/20/solid/Bars3Icon.d';
import NavLinks from './NavLinks';

function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 p-10 items-center'></div>
      <Bars3Icon className='h-8 w-8 cursor-pointer'></Bars3Icon>
      <Link href="/" prefetch={false}>
        <h1 className='text-2xl font-bold'>
          The{" "}
        <span className="underline decoration-6 decoration-orange-400">
          J
        </span>{""}
        News
        </h1>
      </Link>
      <div className='flex items-center justify-end space-x-2'>
        <button className='hidden md:inline bg-slate-500 text-white px-4 lg:px-8 py-2 lg:py-2  '>
          Subscribe today!
        </button>
        <Link href="/blog" prefetch={false}>
          <a className='text-lg font-bold'>Blog</a>
        </Link>
        <Link href="/contact" prefetch={false}>
          <a className='text-lg font-bold'>Contact</a>
        </Link>
        <Link href="/about" prefetch={false}>
          <a className='text-lg font-bold'>About</a>
        </Link>
        
      </div>    

      <NavLinks>
        </NavLinks>  
    </header>
  )
}

export default Header