/* eslint-disable react/prop-types */

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Main({
  movies,
  selectedId,
  onSelectMovie,
  onAddMovie,
  onDeleteMovie,
  watched,
  isLoading,
  setIsLoading,
  onDeleteWatched,
}) {
  return (
    <div className="flex flex-row gap-10 items-center justify-center my-10 ">
      <LeftSide movies={movies} onSelectMovie={onSelectMovie} />

      <RightSide
        movies={movies}
        selectedId={selectedId}
        onAddMovie={onAddMovie}
        onDeleteMovie={onDeleteMovie}
        watched={watched}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onDeleteWatched={onDeleteWatched}
      />
    </div>
  );
}

export default Main;
