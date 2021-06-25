import { DetailWrapper } from "../styles";

const MovieDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.movie.poster} alt={props.movie.title} />
      <p>{props.movie.title}</p>
      <p> {props.movie.released}</p>
      <p>{props.movie.runtime}</p>
      <p>{props.movie.genre}</p>
      <h4>{props.movie.plot}</h4>
    </DetailWrapper>
  );
};

export default MovieDetail;
