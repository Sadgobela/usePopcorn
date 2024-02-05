import WatchedMovie from "./WatchedMovie";
export default function WatchedMoviesList({ watched, onDeleteMatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteMatched={onDeleteMatched}
        />
      ))}
    </ul>
  );
}
