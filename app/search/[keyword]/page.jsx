import Movies from "@/app/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=97dd53b5ba4297aaedd8fd0ee9649e43&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log("data----", data);
  //data?.results?.map((dt, i) => <Movies key={i} dt={dt} />
  return (
    <div>
        {
            !data?.results ?
            <div>Sonuç Bulunamadı!</div> :
            <div className="flex items-center flex-wrap justify-center gap-3">
                {
                       data?.results?.map((dt, i) =>( 
                        <Movies key={i} dt={dt} />
                ))
                }
            </div>
        }
    </div>
  );
};

export default Page;
