import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useMovieInfo from "../utils/useMovieInfo";
import useEpisodes from "../utils/useEpisodes";
import { BsFillStarFill } from "react-icons/bs";
import Episodes from "./Episodes";

const MovieCard = () => {
  const { id } = useParams();
  
  // CALL THE API WITH PARAM
  const movieInfo = useMovieInfo(id);
  const episodesInfo = useEpisodes(id);
  const [episode, setEpisode] = useState(episodesInfo);
  // console.log(episodesInfo[0].season)

  const filterSeason = (ses) => {
    const filteredSeason = episodesInfo.filter((epis)=>epis.season == ses)
    // console.log(episodesInfo)
    // console.log(filteredSeason)
    setEpisode(filteredSeason)
  }
      // console.log(episodesInfo)


  // function onlyUnique
  const uniqueSeason = new Set(episodesInfo.map((epi)=>{
    return epi.season
  }));
  console.log(uniqueSeason)
  const seasonArray = [...uniqueSeason]

  return (
    // <div>MovieCard : {movieInfo.name}</div>
    <div className="m-5 px-10 py-5 shadow rounded-lg mt-20">
      <div className="text-5xl text-gray-800 pb-5">{movieInfo?.name}</div>
      <div className="flex ">
        <div className="w-[30%]">
          <img
            src={movieInfo?.image?.original}
            alt=""
            className="h-[60vh] rounded-lg"
          />
        </div>
        <div className="w-[70%] text-justify ml-8">
          <div className="mb-5">
            <h1 className="text-2xl text-gray-700">Description</h1>
            <p
              className="text-md"
              dangerouslySetInnerHTML={{ __html: movieInfo?.summary }}
            />
          </div>
          <div className="flex justify-between mb-5">
            <div className="">
              <h1 className="text-2xl text-gray-700">Language</h1>
              <p className="text-md">{movieInfo?.language}</p>
            </div>
            <div className="">
              <h1 className="text-2xl text-gray-700">Rating</h1>
              <p className="text-md flex">
                {movieInfo?.rating?.average}
                <BsFillStarFill className="text-md m-1" />
              </p>
            </div>
            <div className="">
              <h1 className="text-2xl text-gray-700">Genres</h1>
              <p className="text-md">{movieInfo?.genres?.join(", ")}</p>
            </div>
            <div className="">
              <h1 className="text-2xl text-gray-700">Runtime</h1>
              <p className="text-md">{movieInfo?.runtime} mins</p>
            </div>
            <div className="">
              <h1 className="text-2xl text-gray-700">Premiered</h1>
              <p className="text-md">{movieInfo?.premiered}</p>
            </div>
          </div>
          <div className="mb-5"></div>
        </div>
      </div>
      <div className="my-5">
      <h1 className="text-3xl mb-5">Episodes</h1>
        <div className="">
          <div className="">
            <div className="flex flex-wrap justify-between">
              {seasonArray.map((count)=>(
                <button key={count} onClick={()=>{filterSeason(count)}} className="bg-gray-700 hover:bg-slate-800 p-2 rounded mr-5 mb-5 text-white">Season {count} </button>
              ))}
              {/* <li onClick={()=>{filterSeason('2')}} className="bg-gray-700 hover:bg-slate-800 p-2 rounded mr-5 text-white">Season 2</li> */}
            </div>
          </div>
          <div className="">
          {episode.map((epi)=>( 
            <Episodes key={epi.id} props={epi}/>       
          ))}
          </div>
          
        </div>
       </div>
    </div>
  );
};

export default MovieCard;
