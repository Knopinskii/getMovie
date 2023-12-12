// const API = "http://www.omdbapi.com/?s=tt3896198&apikey=6fa3393b";

import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import NavBar from "./components/Navi/NavBar";
import Loader from "./components/UI/Loader";
import ErrorMessage from "./components/UI/ErrorMessage";

// const tempMovies = [
//   {
//     Title: "Titanic",
//     Year: "1997",
//     imdbID: "tt0120338",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic II",
//     Year: "2010",
//     imdbID: "tt1640571",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic: The Legend Goes On...",
//     Year: "2000",
//     imdbID: "tt0330994",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic",
//     Year: "1953",
//     imdbID: "tt0046435",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTU3NTUyMTc3Nl5BMl5BanBnXkFtZTgwOTA2MDE3MTE@._V1_SX300.jpg",
//   },
//   {
//     Title: "Raise the Titanic",
//     Year: "1980",
//     imdbID: "tt0081400",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNTQyZGI0NDgtYTM0ZC00NTdkLTk2OTItYTgwYmYwNjZlNDRlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic",
//     Year: "1996",
//     imdbID: "tt0115392",
//     Type: "series",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTBhMjUzMDItYTBlZS00OThkLWJmZDQtMjg1YTQ5ZDkxYmFjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
//   },
//   {
//     Title: "The Legend of the Titanic",
//     Year: "1999",
//     imdbID: "tt1623780",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjMxNDU5MTk1MV5BMl5BanBnXkFtZTgwMDk5NDUyMTE@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic",
//     Year: "2012",
//     imdbID: "tt1869152",
//     Type: "series",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTA4MjIyZWEtZjYwMS00ZmQ1LWJiMDEtMWNiNTI5NWE3OGJjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic 666",
//     Year: "2022",
//     imdbID: "tt18394428",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMWRjZTBiNjAtN2Q5Ni00Yjg5LWIwNTUtMDVhN2NjOWYwOTU0XkEyXkFqcGdeQXVyNjE0MTY2NjY@._V1_SX300.jpg",
//   },
//   {
//     Title: "Titanic: Blood and Steel",
//     Year: "2012",
//     imdbID: "tt1695366",
//     Type: "series",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjI2MzU2NzEzN15BMl5BanBnXkFtZTcwMzI5NTU3Nw@@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Runtime: 148,
//     ImdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     Runtime: 116,
//     ImdbRating: 8.5,
//     userRating: 9,
//   },
// ];

function App() {
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  function handleDeleteMovie() {
    setSelectedId(null);
  }

  function handleAddMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=6fa3393b`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <div className="max-w-screen-xl  h-screen py-4 px-10 bg-slate-700 ">
      <NavBar movies={movies} query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <Main
          movies={movies}
          selectedId={selectedId}
          onSelectMovie={handleSelectMovie}
          onAddMovie={handleAddMovie}
          onDeleteMovie={handleDeleteMovie}
          watched={watched}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          onDeleteWatched={handleDeleteWatched}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default App;
