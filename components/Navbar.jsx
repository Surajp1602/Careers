import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-between items-center">

        <Link href="/">

        <img src="/images/logo.png" alt="logo-img" />

        </Link>

            <div className="flex items-center gap-10">

              <Link href="/"><p className='nav_elem hover:text-purple-900'>Resources</p></Link>
              <Link href="/"><p className='nav_elem hover:text-purple-900'>Opportunities</p></Link>
              <Link href="/"><p className='nav_elem hover:text-purple-900'>Jobs</p></Link>
              <Link href="/"><p className='nav_elem hover:text-purple-900'>Alumni</p></Link>

                
                
                
                

            </div>
            
      </div>
    </div>
  )
}

export default Navbar
