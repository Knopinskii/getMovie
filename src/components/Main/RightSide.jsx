/* eslint-disable react/prop-types */

import WatchedMovie from "./WatchedMovie";
import WatchedSummary from "./WatchedSummary";

function RightSide({
  selectedId,
  onAddMovie,
  onDeleteMovie,
  watched,
  isLoading,
  setIsLoading,
  onDeleteWatched,
}) {
  return (
    <div className="bg-slate-800 rounded-lg w-96 h-96 overflow-y-auto">
      {selectedId ? (
        <WatchedMovie
          selectedId={selectedId}
          onAddMovie={onAddMovie}
          onDeleteMovie={onDeleteMovie}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <WatchedSummary watched={watched} onDeleteWatched={onDeleteWatched} />
      )}
    </div>
  );
}

export default RightSide;
