/* eslint-disable react/prop-types */

function Search({ query, setQuery }) {
  return (
    <div className="flex my-2 mx-18 font-extralight w-96">
      <input
        type="text"
        placeholder="Search for movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="grow rounded-lg bg-violet-800 text-xl  text-white font-extralight p-3"
      />
    </div>
  );
}

export default Search;
