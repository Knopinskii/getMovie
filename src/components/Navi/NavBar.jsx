/* eslint-disable react/prop-types */
import Search from "./Search";
import Title from "./Title";
import Results from "./Results";

function NavBar({ movies, query, setQuery }) {
  return (
    <nav className="flex items-center justify-between  bg-violet-900 rounded-lg p-2">
      <Title />
      <Search query={query} setQuery={setQuery} />
      <Results movies={movies} />
    </nav>
  );
}

export default NavBar;
