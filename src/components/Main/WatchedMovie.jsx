/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function WatchedMovie({ selectedId, onAddMovie, onDeleteMovie }) {
  const [movie, setMovie] = useState({});

  function handleAddedMovie() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title: movie.Title,
      poster: movie.Poster,
      rating: movie.imdbRating,
      duration: movie.Runtime,
    };
    onAddMovie(newWatchedMovie);
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?i=${selectedId}&apikey=6fa3393b`
        );
        const data = await res.json();
        setMovie(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!movie.Title) return;
      document.title = `movie | ${movie.Title}`;

      return function () {
        document.title = "getMovie";
      };
    },
    [movie]
  );

  return (
    <div className=" rounded-lg ">
      <div className="bg-slate-900 flex gap-2">
        <div>
          <button
            onClick={onDeleteMovie}
            className="bg-white rounded-full w-8 h-8 inline-block absolute text-2xl pb-7"
          >
            &larr;
          </button>
          <img src={movie.Poster} alt="movie" className="h-52"></img>
        </div>
        <div className=" text-white p-4 space-y-4 font-extralight">
          <h2 className="text-2xl">
            <b>{movie.Title}</b>
          </h2>
          <p>{movie.Released}</p>
          <p>{movie.Genre}</p>
          <p>{movie.imdbRating} imdb Rating</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-left px-6 text-sm py-4 text-white">
        <p>{movie.Plot}</p>

        <button
          className="bg-slate-900 rounded-lg w-24 ml-28 p-2 hover:scale-125"
          onClick={handleAddedMovie}
        >
          + Add to list
        </button>

        <p>Actors: {movie.Actors}</p>
        <p>Directed by {movie.Writer}</p>
      </div>
    </div>
  );
}

export default WatchedMovie;
