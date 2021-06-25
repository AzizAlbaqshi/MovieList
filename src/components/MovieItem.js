import { MovieWrapper } from "../styles";
const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <img
        className="PosterImage"
        src={props.movie.poster}
        alt={props.movie.title}
        onClick={() => props.setMovie(props.movie)}
      />
      <p className="Text">{props.movie.title}</p>
      <p className="Text"> {props.movie.released}</p>
    </MovieWrapper>
  );
};
export default MovieItem;
