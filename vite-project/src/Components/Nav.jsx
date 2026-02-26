import React from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Nav() {
  const menu = [
              { href: "/", Name: "home" },
              { href: "/", Name: "About" },
              { href: "/", Name: "contact" },
              { href: "/", Name: "Info" },
              { href: "/", Name: "menu" }
          ]
      
          const [open, close] = useState(false)
      
          const togglemeu = () => {
              close(!open)
          }
  return (
    <>
        <nav className='flex justify-between px-10 bg-black text-white h-10 items-center'>
                            <div>logo</div>
            
                            <ul className='  hidden md:flex gap-5'>
            
                                {
                                    menu.map((v, i) => (
                                        <li key={i}><a href={v.href}>{v.Name}</a></li>
                                    ))
                                }
                            </ul>
                            <button className=' hidden md:block'>login</button>
                            <div className=' block md:hidden' onClick={togglemeu}>
                                {
                                    open ? <RxCross2/>:<FaBars/>
                                }
                            </div>
                            {
                    open &&(
                      <ul className=' md:hidden bg-gray-800 text-white w-full absolute top-10 left-0 flex  flex-col gap-3 text-center'>
                      {
                        menu.map((v,i)=>(
                            <li key={i}><a href={v.href}>{v.Name}</a></li>
                        ))
                      }
                      </ul>
                    )
                  }
            
                        </nav> 
    </>
  )
}
