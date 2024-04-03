import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../components/apiServices/api";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <h1 className={css.head}>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
