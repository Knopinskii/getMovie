/* eslint-disable react/prop-types */
function Results({ movies }) {
  return (
    <div className="font-extralight text-white text-2xl flex items-center justify-center px-4">
      <p>
        Found <b>{movies.length}</b> results
      </p>
    </div>
  );
}

export default Results;
