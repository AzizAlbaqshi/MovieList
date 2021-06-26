import { DetailWrapper } from "../styles";
import { useParams, useHistory } from "react-router";
import movies from "../movies";

const MovieDetail = (props) => {
  const movieId = useParams().movieId;
  const movie = props.movies.find((movies) => movies.id === +movieId);
  const history = useHistory();

  return (
    <DetailWrapper>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.title}</p>
      <p> {movie.released}</p>
      <p>{movie.runtime}</p>
      <p>{movie.genre}</p>
      <h4>{movie.plot}</h4>
      <button class="button button4" onClick={() => history.push("/")}>
        Back
      </button>
    </DetailWrapper>
  );
};

export default MovieDetail;
