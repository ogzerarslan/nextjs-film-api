"use client"
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [keywords, setkKeywords] = useState('')
    const router = useRouter()
    const menu =[
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        },
    ]
    const searchFunc = (e) =>{
        if(e.key === "Enter" && keywords.length >=3){
                router.push(`/search/${keywords}`)
                setkKeywords('')
        }
    }
    
  return (
    <header className='flex items-center gap-5 h-20 p-5'>
      <Link href={'/'}><div className='bg-red-600 p-2 text-2xl rounded-sm text-white font-bold'>Netfiliks</div></Link>  
        <div className='flex  flex-1 items-center gap-2 border p-3 rounded-sm '>
            <input value={keywords} onKeyDown={searchFunc} onChange={e => setkKeywords(e.target.value)} className='outline-none flex-1 bg-transparent ' placeholder='Arama' type="text" />
            <IoSearch size={25}  />
        </div>
        <ThemeComp/>
        {
            menu.map((mn,i)=>(
              <MenuItem mn={mn} key={i}/>  
            ))
        }
    </header>
  )
}

export default Header