/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function LeftSide({ movies, onSelectMovie }) {
  return (
    <ul className="bg-slate-800  rounded-lg px-4 w-96 h-96 flex flex-col items-left  divide-y divide-neutral-600 overflow-auto   ">
      {movies.map((movie) => (
        <li
          key={movie.imdbID}
          className="flex items-center justify-left gap-4 py-2 hover:bg-slate-900 "
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <div className="w-12">
            <img src={movie.Poster} alt="movie"></img>
          </div>
          <div className="text-l font-extralight text-white ">
            <p>
              <b>{movie.Title}</b>
            </p>
            <p>{movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LeftSide;
