import React from 'react'

export default function div() {
  return (
    <>
        <nav className="bg-black text-white p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-bold">MySite</h1>
        
                  <ul className=" space-x-6 hidden md:flex">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                  </ul>
        
                  <button className="hidden md:block bg-blue-900 hover:bg-blue-700 px-4 py-1 rounded-lg">
                    Log in
                  </button>
                  <button className=' md:hidden'><FiMenu /></button>
                </div>
              </nav> 
    </>
  )
}
