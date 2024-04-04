import { useParams } from "react-router-dom";
import { searchMoviesCreditsById } from "../../components/apiServices/api";
import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCredits, setmovieCredits] = useState([]);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCredits = async () => {
      try {
        const data = await searchMoviesCreditsById(movieId);
        setmovieCredits(data.cast);
      } catch (error) {
        // setError(true);
      } finally {
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <ul className={css.actors}>
      {Array.isArray(movieCredits) &&
        movieCredits.map((credit) => {
          return (
            <li key={credit.id} className={css.movieItem}>
              <img
                className={css.img}
                src={
                  credit.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w400${credit.profile_path}`
                    : "/src/images/had.jpeg"
                }
                alt={credit.name}
              />
              <div className={css.name}>
                <p>{credit.name}</p>
                <p>Character: {credit.character}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;
