'use client'

import Link from 'next/link'
export default function Profile  ()  {

  
  return (
    <>
    <div className='dark:bg-dark-primBg dark:text-dark-bavit'>
    <button 
    className='bg-btnbg p-1 px-4 text-white font-semibold m-6 rounded-lg'>
      <Link href='/pages/login'>Log out</Link>
    </button>
    <div className='text-4xl flex items-center justify-center min-h-screen'>Welcome to profile</div>
    </div>
    </>
  )
}

