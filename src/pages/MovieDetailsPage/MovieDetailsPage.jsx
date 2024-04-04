import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { searchMoviesDetailsById } from "../../components/apiServices/api";
import { useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setmovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const data = await searchMoviesDetailsById(movieId);
        setmovieDetails(data);
      } catch (error) {
        // setError(true);
      } finally {
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const genres =
    movieDetails.genres &&
    movieDetails.genres.map((genre) => genre.name).join(", ");
  return (
    <div>
      <Link to={backLinkRef.current}>← Go back</Link>
      <div className={css.mainContainer}>
        <div className={css.detailContainer}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt=""
          />
          <div className={css.movieDetails}>
            <h2 className={css.name}>{movieDetails.original_title}</h2>
            <p className={css.genres}>Genres: {genres}</p>
            <p className={css.overview}>{movieDetails.overview}</p>
            <p className={css.budget}>Budget: {movieDetails.budget}$</p>
            <p className={css.revenue}> Revenue: {movieDetails.revenue}$</p>
            <p className={css.vote}>
              Vote average: {movieDetails.vote_average}
            </p>
          </div>
        </div>
        <Link className={css.detbtn} to="cast">
          {" "}
          Cast
        </Link>
        <Link className={css.detbtn} to="reviews">
          Reviews
        </Link>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
