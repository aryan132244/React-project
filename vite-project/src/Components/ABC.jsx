import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ABC() {
    const [text, setText] = useState("");

    const uppercase = () => {
        setText(text.toUpperCase());
    };

    const lowercase = () => {
        setText(text.toLowerCase());
    };

    const handleDelete = () => {
        setText("");
    };

    const menu = [
        { href: "/", Name: "home" },
        { href: "/", Name: "About" },
        { href: "/", Name: "contact" },
        { href: "/", Name: "Info" },
        { href: "/", Name: "menu" }
    ];

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <>
            <div>
                <br /><br />
                <input
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className='border-black border-2'
                    type="text"
                    placeholder='Enter text'
                />
                <br /><br />

                <div className='flex gap-3'>
                    <button onClick={uppercase} className='bg-amber-200 rounded-lg px-4 py-1'>UPPERCASE</button>
                    <button onClick={lowercase} className='bg-amber-200 rounded-lg px-4 py-1'>LOWERCASE</button>
                    <button onClick={handleDelete} className='bg-amber-200 rounded-lg px-4 py-1'>DELETE</button>
                </div>
                <br /><br />
            </div>

            <nav className='flex justify-between px-10 bg-linear-to-b from-black to-gray-800 text-white h-10 items-center relative'>
                <div>logo</div>

                <ul className='hidden md:flex gap-5'>
                    {menu.map((v) => (
                        <li key={v.Name} className='hover:text-red-800 duration-300'>
                            <a href={v.href}>{v.Name}</a>
                        </li>
                    ))}
                </ul>

                <button className='hidden md:block cursor-pointer'>login</button>

                <div className='block md:hidden' onClick={toggleMenu}>
                    {open ? <RxCross2 /> : <FaBars />}
                </div>

                {open && (
                    <ul className='bg-gray-800 text-white w-full left-0 absolute top-10 flex flex-col gap-4 p-4'>
                        {menu.map((v) => (
                            <li key={v.Name}>
                                <a href={v.href}>{v.Name}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}