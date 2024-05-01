import Link from 'next/link'
import React from 'react'

const DashboardNavbar = () => {
  return (
    <nav className='border-b flex'>
      <div className=' py-6 lg:lg:w-1/4 lg:border-r flex justify-center w-full'>
        <Link className='text-xl font-semibold bg-sky-600 text-white px-4 py-2' href="/dashboard">Dashboard</Link>
      </div>
      <div>

      </div>
    </nav>
  )
}

export default DashboardNavbar