"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre') 
    //console.log("genre", genre)
    const tabs =[
        {
            name: "Popüler",
            url: "popular",
        },
        {
            name: "Son Eklenenler",
            url: "latest",
        },
        {
            name: "Yakında",
            url: "upcoming",
        },
    ]
  return (
    <div className='p-5 my-5 bg-red-600 text-white dark:bg-red-900 flex items-center justify-center gap-10 font-bold'>
        {
            tabs.map((tab,i) =>(
                <Link  key={i} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-violet-200":""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>

            ))
        }
    </div>
  )
}

export default Tabs