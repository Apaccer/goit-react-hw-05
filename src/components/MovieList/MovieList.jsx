// adult: false;
// backdrop_path: "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg";
// genre_ids: [28, 878, 12];
// id: 823464;
// media_type: "movie";
// original_language: "en";
// original_title: "Godzilla x Kong: The New Empire";
// overview: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.";
// popularity: 4436.632;
// poster_path: "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg";
// release_date: "2024-03-27";
// title: "Godzilla x Kong: The New Empire";
// video: false;
// vote_average: 6.745;
// vote_count: 314;
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className={css.movieItem}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={css.descr}>
                <p>{movie.title}</p>
                <p>Vote average: {movie.vote_average}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
