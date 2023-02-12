// import { set } from "immer/dist/internal";
import React, { useState } from "react";
import { useEffect } from "react";
import useAllMovies from "../utils/useAllMovies";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import ShowCard from "./ShowCard";
import {BsBookmarkHeart} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/bookmarkSlice";

const Genres = ({ prop }) => {
  const allMovies = useAllMovies();
  const [filteredMovied, setfilteredMovies] = useState(allMovies);
  const [bookmarkColor, setBookmarkColor] = useState('text-yellow-500');


  useEffect(() => {
    showFilteredMovies(prop)
    // const timer = setTimeout(showFilteredMovies(prop),10000);
    // return()=>{
    //   clearTimeout(timer);
    // }
  },[filteredMovied]);

  const showFilteredMovies = (genprop) => {
    const filteredMoviedAccordingToGenre = allMovies.filter((movAccToGen) =>
      movAccToGen.genres.includes(genprop)
    );
    setfilteredMovies(filteredMoviedAccordingToGenre);
  };

  const dispath = useDispatch();  
  const addToBookmark = (item) =>{
    dispath(addItem(item))
  }

  // console.log( filteredMovied);
  return (
    <div>
      <ul>
        <h1 className="text-2xl px-10 font-bold">{prop}</h1>
      </ul>
      <div className="flex gap-5 py-5 pl-2  overflow-x-scroll scroll-smooth scrollbar-hide">
        {filteredMovied === [] ? (
          <Shimmer />
        ) : (
          filteredMovied.map((show) => (
            // <h1>{item.name}</h1>
            <div
              key={show.id}
              className="hover:bg-slate-800 hover:text-white hover:rounded-lg shadow-lg p-5 rounded-lg flex  min-w-[26rem] "
            >
              <Link to={"/movies/" + show.id} className="mr-10">
                <ShowCard props={show} />
              </Link>

              <BsBookmarkHeart
                className={bookmarkColor + " text-[2rem] hover:text-cyan-400 "}
                onClick={() => {
                  addToBookmark(show);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Genres;
