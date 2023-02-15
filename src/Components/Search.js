import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import useAllMovies from '../utils/useAllMovies'
import ShowCard from './ShowCard';

const Search = () => {
  const allMovies = useAllMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([])

  useEffect(()=>{
    const timer = setTimeout(()=>getSearchRes(), 200)

    return() =>{
      clearTimeout(timer)
    }
    
  },[searchQuery])


  const getSearchRes = async() =>{
    const data = await fetch("https://api.tvmaze.com/search/shows?q="+searchQuery);
    const json = await data.json();
    setSuggestion(json)
  }
  const res = suggestion.map((it)=>it.show)

  return (
    <div className='m-10 mt-24 min-h-[37vh]'>
      <div className="text-center text-3xl">Finding Something? you can Search here!! </div>
      {/* search container */}
      <div className="flex justify-center mt-10 mb-10">
        <input type="text" onChange={(e)=> setSearchQuery(e.target.value)} className='border-cyan-500 border-2 shadow-lg shadow-cyan-500/50 w-[30rem] px-5 py-3 rounded-full outline-none' placeholder='Please search here' />
        {/* <button className='w-[10rem] px-5 py-3  rounded-r-full border-l-0  bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-700'><BiSearchAlt2 className='text-white text-2xl text-center m-auto'/></button> */}
      </div>

      {/*  */}
      {searchQuery && (
      <div className="md:grid md:grid-cols-3 md:place-content-evenly gap-5 p-10 shadow rounded-2xl m-0">
        
        {/* <ShowCard  props={res[0]} /> */}
        {res.map((show)=>(
          <Link key={show.id} to={'/movies/'+show.id} className="hover:bg-slate-800 hover:text-white hover:rounded-lg shadow-lg p-5 rounded-lg ">
            <ShowCard props={show}/>
          </Link>
          // <li key={item.id}>{item.id}</li>
        ))}
        
      </div>
      )}
    </div>
  )
}

export default Search