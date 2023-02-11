import React from 'react'
import {useParams} from 'react-router-dom';
import useMovieInfo from '../utils/useMovieInfo';
import {BsFillStarFill} from 'react-icons/bs'

const MovieCard = () => {
    const {id} = useParams()
    // CALL THE API WITH PARAM
    const movieInfo = useMovieInfo(id)
    // console.log(id)
  return (
    // <div>MovieCard : {movieInfo.name}</div>
    <div className="m-5 px-10 py-5 shadow-lg shadow-black rounded-lg">
        <div className="text-5xl text-gray-800 pb-5">{movieInfo?.name}</div>
        <div className="flex ">
            <div className="w-[30%]">
                <img src={movieInfo?.image?.original} alt="" className='h-[60vh] rounded-lg'/>
            </div>
            <div className="w-[70%] text-justify">
                <div className="mb-5">
                    <h1 className='text-2xl text-gray-700'>Description</h1>
                    <p class="text-md" dangerouslySetInnerHTML={{ __html: movieInfo?.summary }} />
                </div>
                <div className="flex justify-between mb-5">
                    <div className="">
                        <h1 className='text-2xl text-gray-700'>Language</h1>
                        <p class="text-md">{movieInfo?.language}</p>
                    </div>
                    <div className="">
                        <h1 className='text-2xl text-gray-700'>Rating</h1>
                        <p class="text-md flex">{movieInfo?.rating?.average}<BsFillStarFill className='text-md m-1'/></p>
                    </div>
                    <div className="">
                        <h1 className='text-2xl text-gray-700'>Genres</h1>
                        <p class="text-md">{movieInfo?.genres?.join(', ')}</p>
                    </div>
                    <div className="">
                        <h1 className='text-2xl text-gray-700'>Runtime</h1>
                        <p class="text-md">{movieInfo?.runtime}</p>
                    </div>
                    <div className="">
                        <h1 className='text-2xl text-gray-700'>Premiered</h1>
                        <p class="text-md">{movieInfo?.premiered}</p>
                    </div>
                </div>
                <div className="mb-5">

                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard