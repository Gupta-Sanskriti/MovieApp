import React,{useState, useEffect} from 'react'

const useAllMovies = () => {
    const [shows, setShows] = useState([]);
    const getAllMovie = async() =>{
        const data = await fetch('https://api.tvmaze.com/shows');
        const json = await data.json()
        setShows(json)
    }
    // console.log(shows)
    useEffect(() =>{
        getAllMovie()
    },[])
    return shows
}

export default useAllMovies