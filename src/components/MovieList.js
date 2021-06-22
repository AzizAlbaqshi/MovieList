import movies from "../movies";

const MovieList = () => {
  const movieList = movies.map((movie) => (
    <div className="movie" key={movie.id}>
      <img alt={movie.name} ClassName="MoviePoster" src={movie.poster} />

      <p className="Text">{movie.title} </p>
      <p className="Text"> {movie.released}</p>
      <p className="Text"> {movie.runtime} </p>
      <p className="Text">{movie.genre} </p>
      <p className="Text"> {movie.plot}</p>
    </div>
  ));

  return <div>{movieList}</div>;
};

export default MovieList;
