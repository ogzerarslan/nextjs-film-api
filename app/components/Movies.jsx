"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({dt}) => {
    const router = useRouter()
   //console.log(dt)
  return (
    <div className='w-[700px] relative' onClick={()=>router.push(`/movie/${dt.id}`)}>
        
        <Image width={700} height={400} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path ||dt?.poster_path}`}/>
        <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
            <div className='text-2xl font-semibold text-white'>{dt?.title}</div>
            <div>{dt?.release_date} - {dt?.vote_average}</div>
           
        </div>

    </div>
  )
}

export default Movies