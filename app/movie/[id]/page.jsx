import Image from 'next/image';
import React from 'react'
const getMovie = async(id) =>{

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=97dd53b5ba4297aaedd8fd0ee9649e43`)
    return await res.json();
}

const Page = async ({params}) => {
    const id = params.id
    const movieDetail = await getMovie(id)
    console.log(movieDetail,"movieDetail")

  return (
    <div className='relative p-7 min-h-screen drop-shadow-md text-white'>
            {
                
                  <Image  style={{objectFit:"cover"}}fill  src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path ||movieDetail?.poster_path}`}/>
            }
            <div className='absolute '>

              <div className='text-5xl font-bold my-3 drop-shadow-md '>{movieDetail?.title}</div>
              <div className='text-2xl  my-3 w-1/2  '>{movieDetail?.overview}</div>
              <div className='text-lg  my-3   '>{movieDetail?.release_date} - {movieDetail?.vote_average} </div>
              <div className='border w-24 px-7 py-2 rounded-md text-lg cursor-pointer'>Trail</div>
            </div>
            
    </div>
  )
}

export default Page