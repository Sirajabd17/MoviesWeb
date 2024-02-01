import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const moveToMovie = useNavigate();

  const goToMovie = (id) => {
    moveToMovie(`/moviessummary/${id}`);
  };
  console.log(data);
  return (
    <>
      <div className="sm:w-60 w-full p-2  rounded sm:m-2 border-blue-400 border-2  mb-4">
        <img
          src={
            data?.show?.image?.original
              ? data?.show?.image?.original
              : "image/imagePoster.jpg"
          }
          alt="movies poster"
        />
        <div className="text-center mt-2">
          <h1 className="text-lg font-medium  text-white ">
            {" "}
            Name: {data?.show?.name}{" "}
          </h1>
          {data?.show?.rating?.average && (
            <h1 className="text-lg   text-white font-medium ">
              {" "}
              Rating:{data?.show?.rating?.average}{" "}
            </h1>
          )}
          {/* ?   <h1> genres:{data?.show?.genres.join(",")} </h1> */}
          <h1 className="  text-white text-lg font-medium ">
            {" "}
            Language:{data.show?.language}
          </h1>
          <button
            className="m-1 text-white rounded p-1 bg-blue-400 hover:bg-blue-700"
            onClick={() => goToMovie(data?.show?.name)}
          >
            More detail
          </button>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
