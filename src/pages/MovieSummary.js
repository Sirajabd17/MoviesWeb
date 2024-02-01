import { useNavigate, useParams } from "react-router-dom";
import { MOVIES_API_DATA } from "../shared/Components/utils/Constants";
import { useState, useEffect } from "react";
import Header from "../shared/Components/Header";

const MoviesSummary = () => {
  const moveToBookticket = useNavigate();
  const { movieName } = useParams();
  const [moviesData, setMoviesData] = useState({});

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${MOVIES_API_DATA}?q=${movieName}`);

      const moviesInfo = await response.json();
      console.log(moviesInfo[0]?.show);

      setMoviesData(moviesInfo[0]?.show);
    } catch (error) {
      console.error("error fetching data", error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const bookTicket = (movieName) => {
    moveToBookticket(`/book-ticket/${movieName}`);
  };

  return (
    <>
      <Header />
      <div class="sm:w-1/2 md:w-full m-auto mb-10 px-4">
        <div class="rounded-lg h-96 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center  w-full"
            src={
              moviesData?.image?.original
                ? moviesData?.image?.original
                : "image/imagePoster.jpg"
            }
          />
        </div>
        <div className="bg-black opacity-85 mt-2 px-2 rounded-xl">
          <h2 class="title-font text-white text-2xl font-medium mt-6 mb-3">
            {movieName}
          </h2>
          <div
            className="leading-relaxed text-base text-gray-500"
            dangerouslySetInnerHTML={{ __html: `${moviesData?.summary}` }}
          ></div>
          <button
            className="flex mx-auto my-4 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
            onClick={() => bookTicket(moviesData?.name)}
          >
            Book ticket
          </button>
        </div>
      </div>
    </>
  );
};
export default MoviesSummary;
