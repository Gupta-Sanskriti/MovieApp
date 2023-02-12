import {Link} from 'react-router-dom';
import ShowCard from "./ShowCard";
import Shimmer from "./Shimmer";
import useAllMovies from "../utils/useAllMovies";
import{BsBookmarkHeart} from 'react-icons/bs'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem ,changeBookColor} from '../Redux/bookmarkSlice';
import { useEffect } from 'react';

const Movies = () =>{
    const [bookmarkColor, setBookmarkColor] = useState('text-yellow-500');
    const shows = useAllMovies();

    const dispath = useDispatch();

    const bookMarkItem = useSelector(store => store.bookmark.bookval)
    
    const addToBookmark = (item, id) =>{
        // console.log(item)
        dispath(addItem(item))
        // setBookmarkColor('text-red-500')
        // dispath(changeBookColor(id))
    }
    // console.log(addToBookmark())


    return(
        <div className="ml-10 mr-10 text-gray-800 mb-10 mt-20">
            <h1 className="text-3xl p-5 text-center">Movies and Shows</h1>
            <div className="md:grid md:grid-cols-3 md:place-content-evenly gap-5 p-10 shadow rounded-2xl m-0">
                {shows.length === 0? (<Shimmer/>) : (
                    shows.map((show)=>(
                        <div key={show.id} className="hover:bg-slate-800 hover:text-white hover:rounded-lg shadow-lg p-5 rounded-lg flex">
                            <Link  to={'/movies/'+show.id} className="mr-10">
                                <ShowCard props={show}/>
                            </Link>
                            
                            <BsBookmarkHeart className={bookmarkColor+ " text-[2rem] hover:text-cyan-400 "} onClick={()=>{
                                addToBookmark(show, show.id) 
                                
                            }}/>

                        </div>
                        
                    
                    ))
                )}
            </div>

        </div>
    )
}
export default Movies;