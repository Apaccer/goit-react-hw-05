import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../components/apiServices/api";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className={css.head}>Trending movies</h1>
      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
