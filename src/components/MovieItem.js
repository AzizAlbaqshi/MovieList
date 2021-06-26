import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <Link to={`/${props.movie.id}`}>
        <img src={props.movie.poster} alt={props.movie.title} />
      </Link>
      <p className="Text">{props.movie.title}</p>
      <p className="Text"> {props.movie.released}</p>
    </MovieWrapper>
  );
};
export default MovieItem;
