import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className={css.movieItem}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className={css.descr}>
                  <p>{movie.title}</p>
                  <p>Vote average: {movie.vote_average}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
