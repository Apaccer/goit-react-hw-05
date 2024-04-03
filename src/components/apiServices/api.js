import axios from "axios";
const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGU4MDc1MjhmM2QyMDFlNDA2YWE5M2MwNzM5Y2NhMyIsInN1YiI6IjY2MGQwODJmOWM5N2JkMDE0OWEzNTU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dpzy6juHHfSHEuB5CJy4gzClP8H0OlZsGQb17Yx5cd4",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(url, options);
  console.log(data);
  return data;
};
