/* eslint-disable react/prop-types */
function WatchedSummary({ watched, onDeleteWatched }) {
  return (
    <ul className=" text-white font-extralight ">
      <div className="px-4 py-6 flex items-center justify-center bg-slate-900">
        <h1 className="text-xl uppercase">Movies you watched</h1>
      </div>
      {watched.map((movie) => (
        <li key={movie.imdbID} className="flex flex-row items-center gap-4 p-2">
          <div className="flex">
            <img className="w-16" src={movie.poster} alt="movie"></img>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-lg">{movie.title}</h1>
            <div className="mt-auto">
              <p>⭐{movie.rating}</p>
              <p>⏳{movie.duration}</p>
            </div>
          </div>
          <button onClick={() => onDeleteWatched(movie.imdbID)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default WatchedSummary;
