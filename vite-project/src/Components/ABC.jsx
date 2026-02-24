import React, { useState } from 'react'

export default function ABC() {


    const[a,b]= useState("")

    const uppercase = () =>{
        b(a.toUpperCase())
    }

    const lowercase = () =>{
        b(a.toLowerCase())
    }

    const Delete = () =>{
        b("")
    }
  return (
    <>
    <div>
        <input onChange={(e) => b(e.target.value)} value={a} className=' border-black border-2 ' type="text" />
        <br />
        <button onClick={uppercase} className='bg-amber-200 rounded-b-lg'>uppercase</button>
        <br />
        <button onClick={lowercase} className='bg-amber-200 rounded-b-lg'>lowercase</button>
        <br />
        <button onClick={Delete} className='bg-amber-200 rounded-b-lg'>delet</button>
    </div>



<nav>
    
</nav>
    </>
  )
}

