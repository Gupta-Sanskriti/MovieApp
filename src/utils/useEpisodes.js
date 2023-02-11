import React, { useEffect, useState } from 'react'

const useEpisodes = (param) => {
    const [episodes, setEpisodes] = useState([]);
    // console.log(param)

    useEffect(()=>{
        getEpisodes()
    }, [])

    const getEpisodes = async() =>{
        const data = await fetch("https://api.tvmaze.com/shows/"+param+"/episodes")
        const json = await data.json()
        setEpisodes(json)
    }

  return episodes
    
  
}
export default useEpisodes

