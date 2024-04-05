import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Loader from "./components/Loader/Loader";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
function App() {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
