import React from 'react'

export default function Navbar() {
  return (
    <nav class="bg-black text-white p-4">
  <div class="flex justify-between items-center">
    <h1 class="text-lg font-bold">MySite</h1>
    <ul class="flex space-x-6">
      <li><a href="#" class="hover:text-gray-300">Home</a></li>
      <li><a href="#" class="hover:text-gray-300">About</a></li>
      <li><a href="#" class="hover:text-gray-300">Services</a></li>
      <li><a href="#" class="hover:text-gray-300">Contact</a></li>
    </ul>
    <button className=''>log in</button>
  </div>
</nav>
  )
}
