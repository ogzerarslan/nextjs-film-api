import React from 'react'
import Movies from './components/Movies';

const Page = async({searchParams}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ?"movie/"+searchParams.genre :"trending/all/day"}?api_key=97dd53b5ba4297aaedd8fd0ee9649e43&language=en-US&page=1`,{next:{revalidate:1000}})
  const data = await res.json();

 // console.log(data,"data");
  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {
        data?.results?.map((dt,i)=>(
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  )
}

export default Page