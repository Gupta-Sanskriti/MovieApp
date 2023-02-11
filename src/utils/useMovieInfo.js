import React, { useEffect, useState } from 'react'

const useMovieInfo = (param) => {
    const [currMovie, setCurrMovie] = useState([]);
    // console.log(param)

    useEffect(()=>{
        getMovieInfo()
    }, [])

    const getMovieInfo = async() =>{
        const data = await fetch("https://api.tvmaze.com/shows/"+param)
        const json = await data.json()
        setCurrMovie(json)
    }

  return currMovie
    
  
}

export default useMovieInfo