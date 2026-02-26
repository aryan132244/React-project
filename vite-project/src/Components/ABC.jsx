import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


export default function ABC() {


    const [a, b] = useState("")

    const uppercase = () => {
        b(a.toUpperCase())
    }

    const lowercase = () => {
        b(a.toLowerCase())
    }

    const Delete = () => {
        b("")
    }

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
            <div>

                <br /><br />
                <input onChange={(e) => b(e.target.value)} value={a} className=' border-black border-2 ' type="text" placeholder='Enter any number' />
                <br /> <br />
                <div className='flex gap-3'>
                    <button onClick={uppercase} className='bg-amber-200 rounded-lg  px-4 py-1'>UPPERCASE</button>

                    <button onClick={lowercase} className='bg-amber-200 rounded-lg  px-4 py-1'>LOWERCASE</button>

                    <button onClick={Delete} className='bg-amber-200 rounded-lg  px-4 py-1'>DELETE</button>

                </div>
                <br /><br />
            </div>

            <nav className='flex justify-between px-10 bg-black text-white h-10 items-center relative'>
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
                        open ? <RxCross2 /> : <FaBars />
                    }
                </div>
                {
                    open &&(
                        <ul className=' bg-gray-800 text-white  w-full left-0 absolute top-10 flex flex-col gap-2'>

                            {
                                menu.map((v, i) => (
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

