import {Link} from 'react-router-dom';
import ShowCard from "./ShowCard";
import Shimmer from "./Shimmer";
import useAllMovies from "../utils/useAllMovies";
const Movies = () =>{
    const shows = useAllMovies();
    return(
        <div className="ml-10 mr-10 text-gray-800 mb-10 mt-20">
            <h1 className="text-3xl p-5 text-center">Movies and Shows</h1>
            <div className="md:grid md:grid-cols-3 md:place-content-evenly gap-5 p-10 shadow rounded-2xl m-0">
                {shows.length === 0? (<Shimmer/>) : (
                    shows.map((show)=>(
                        <Link key={show.id} to={'/movies/'+show.id} className="hover:bg-slate-800 hover:text-white hover:rounded-lg shadow-lg p-5 rounded-lg ">
                            <ShowCard props={show}/>
                        </Link>
                    
                    ))
                )}
            </div>

        </div>
    )
}
export default Movies;