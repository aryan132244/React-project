import React from 'react'

import pot from './Components/pot'
import { CiMobile2 } from "react-icons/ci";



export default function App() {
  const menu = [
    { href: "/", Name: "Home" },
    { href: "/", Name: "About" },
    { href: "/", Name: "Resume" },
    { href: "/", Name: "Portfolio" },
  ]
  return (
    <div>
      <nav className="flex justify-between p-3 text-white bg-[linear-gradient(to_right,#050505,#111827,#1a1a1a)] hover:bg-[linear-gradient(to_right,#0f172a,#1e293b,#334155)] transition-all duration-500">
        <ul className='flex gap-5 text-white'>
          {menu.map((v) => (
            <li key={v.Name} className='hover:text-red-800 duration-300'>
              <a href={v.href}>{v.Name}</a>
            </li>
          ))}
        </ul>
        <button className='text-white flex items-center'>
          <CiMobile2 />930-639-1654
        </button>

      </nav>

    </div>

  )
}
