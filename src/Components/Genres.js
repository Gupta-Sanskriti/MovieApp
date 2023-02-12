import React, { useState } from "react";
import useAllMovies from "../utils/useAllMovies";

const Genres = ({ prop }) => {
  const allMovies = useAllMovies();
  const [filteredMovied, setfilteredMovies] = useState(allMovies);

  const filteredMoviedAccordingToGenre = allMovies.filter((movAccToGen) => {
    // if (movAccToGen.genres.includes("Comedy")) return movAccToGen;
    return movAccToGen
  });
//   console.log(filteredMoviedAccordingToGenre);

//   console.log(prop);
  return (
    <div>
      <ul>
        <h1 className="text-xl" >{prop}</h1>
      </ul>
    </div>
  );
};

export default Genres;
