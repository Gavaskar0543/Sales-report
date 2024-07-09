import React from 'react'

export default function Navbar() {
  return (
   <nav className='flex bg-black text-white px-2 py-2 justify-between items-center'>
    <div className='title'>
          <p className="text-2xl cursor-pointer font-bold text-red-500">Sales Report</p>
    </div>
    <div>
    <ul style={{width:"300px"}} className='flex font-semibold justify-between px-2'>

            <li className=''>Dashboard</li>
            <li><a href='#bar-chart'> Bar view </a> </li>
            <li><a href='#pie-chart'>  Pie view </a></li>
        </ul>
    </div>

   </nav>
  )
}
