import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { searchMoviesByQuery } from "../../components/apiServices/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query.length === 0) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        // setError(true);
      } finally {
      }
    };
    fetchMovies();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() === "") {
      toast("Please enter text to search for movies!", {
        icon: "✍🏻",
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });

      return;
    }
    setQuery(value.trim());
    e.target.reset();
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          className={css.searchField}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} title="Pres for search" type="submit">
          🔎
        </button>
      </form>
      <MovieList movies={movies} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MoviesPage;
