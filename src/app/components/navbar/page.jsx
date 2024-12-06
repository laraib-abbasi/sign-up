'use client'

import { useState } from 'react';
import DarkMode from '../dark/page';
import Link from 'next/link';

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
<>
    <div>
      <nav className="bg-primBg dark:bg-dark-primBg font-bavit text-primary w-full p-2 flex items-center shadow-md justify-between ">
        {/* Logo */}
        <div>
          <span className="text-2xl sm:text-4xl mx-4 font-bold text-bavit dark:text-dark-bavit" >BAV-IT</span>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="sm:hidden flex justify-end ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <DarkMode/>
        </div>

       
        
        {/* Navigation Links (Desktop View) */}
        <ul className="hidden sm:flex items-center sm:mx-4 sm:font-bold sm:text-lg text-xs ">
          <li className="mx-3">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link href="#about">About Us</Link>
          </li>
          <li className="mx-3">
            <Link href="#contact">Contact Us</Link>
          </li>
          <div className="border-l border-blue-400 h-4"></div>
          <li className="mx-3">
            <Link href="/pages/login">Login</Link>
          </li>
          <li><DarkMode/></li>
        </ul>
        
        
      </nav>

      {/* Mobile Navigation  */}
      {isOpen && (
        <>
      
        <div className="sm:hidden bg-primBg dark:bg-dark-formBg shadow-md text-secondary">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="/pages/login">Login</Link>
            </li>
          </ul>
          
        </div>
       
        </>
        
        
      )}

      <hr className="border-blue-950 border-t-2 p-0"></hr>

    </div>
    </>
  )
}

