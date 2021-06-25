import movies from "../movies";
//styles :
import { ListWrapper } from "../styles";

//components:
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

//State:
import { useState } from "react";

const MovieList = (props) => {
  const [query, setQuery] = useState("");

  const movieFilter = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLocaleLowerCase())
  );
  const movieList = movieFilter.map((movie) => (
    <MovieItem
      movie={movie}
      setMovie={props.setMovie}
      title={props.title}
      key={movie.id}
      released={props.released}
      runtime={props.runtime}
      genre={props.genre}
      plot={props.plot}
      poster={props.poster}
    />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;
