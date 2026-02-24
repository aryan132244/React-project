import React from 'react'
import i1 from '../image/im1.jpg'
import i2 from '../image/im2.jpg'
import i3 from '../image/im3.jpg'
import i4 from '../image/im4.jpg'
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">MySite</h1>

          <ul className="space-x-6 hidden md:flex">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>

          <button className="hidden md:block bg-blue-900 hover:bg-blue-700 px-4 py-1 rounded-lg">
            Log in
          </button>

          <button className="md:hidden text-2xl">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-200 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow w-full">
          
          <h1 className="text-2xl font-bold mb-6">
            Revamp Your Home in Style
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div>
              <img src={i1} alt="Cushion Covers" className="rounded w-full" />
              <p className="mt-2 text-gray-700">
                Cushion Covers, Bedsheets & More
              </p>
            </div>

            <div>
              <img src={i3} alt="Decor Items" className="rounded w-full" />
              <p className="mt-2 text-gray-700">
                Figurines, Vases & More
              </p>
            </div>

            <div>
              <img src={i2} alt="Storage" className="rounded w-full" />
              <p className="mt-2 text-gray-700">
                Home Storage
              </p>
            </div>

            <div>
              <img src={i4} alt="Lighting" className="rounded w-full" />
              <p className="mt-2 text-gray-700">
                Lighting Solutions
              </p>
            </div>

          </div>

          <p className="text-blue-600 mt-6 cursor-pointer hover:underline">
            Explore All
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>
            <h2 className="text-lg font-bold mb-2">MySite</h2>
            <p className="text-gray-400 text-sm">
              Modern website for home decor, products and services.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Contact</h2>
            <p className="text-gray-400 text-sm">Email: aryankamboj266@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +91 9876543210</p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © 2026 MySite. All rights reserved.
        </div>
      </footer>
    </>
  )
}