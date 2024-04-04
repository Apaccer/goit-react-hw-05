import { useParams } from "react-router-dom";
import { searchMoviesCreditsById } from "../../components/apiServices/api";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { searchMoviesRevById } from "../apiServices/api";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieRev, setmovieRev] = useState([]);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieRev = async () => {
      try {
        const data = await searchMoviesRevById(movieId);
        setmovieRev(data.results);
      } catch (error) {
        // setError(true);
      } finally {
      }
    };
    fetchMovieRev();
  }, [movieId]);
  return (
    <ul className={css.revList}>
      {movieRev.length > 0 ? (
        movieRev.map((rev) => {
          return (
            <li key={rev.id} className={css.revItem}>
              <p className={css.author}>Author: {rev.author}</p>
              <p>{rev.content}</p>
            </li>
          );
        })
      ) : (
        <p className={css.sorr}>Sorry, no yet review</p>
      )}
    </ul>
  );
};

export default MovieReviews;
