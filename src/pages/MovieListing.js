import { MOVIES_API_DATA } from "../shared/Components/utils/Constants";
import { useState, useEffect } from "react";

import Header from "../shared/Components/Header";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${MOVIES_API_DATA}?q=all`);

        const moviesInfo = await response.json();
        setMoviesData(moviesInfo);
        console.log(moviesInfo);
      } catch (error) {
        console.error("error fetching data", error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <div classname=" w-full bg-black ">
        <div className="sm:flex sm:flex-wrap   bg-black sm:mx-6 sm:my-2 mb-2 ">
          {moviesData.map((info, id) => (
            <MovieCard key={id} data={info} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MovieListing;
