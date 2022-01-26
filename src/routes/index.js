import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/auth/SignInPage";
import MoviesComingSoon from "../pages/movies/MoviesComingSoon";
import MoviesTopRated from "../pages/movies/MoviesTopRated";
import MoviesPopular from "../pages/movies/MoviesPopular";
import TvShowsPopular from "../pages/tvshows/TvShowsPopular";
import TvShowsComingSoon from "../pages/tvshows/TvShowsComingSoon";
import TvShowsTopRated from "../pages/tvshows/TvShowsTopRated";
import LatestPeople from "../pages/people/LatestPeople";
import PopularPeople from "../pages/people/PopularPeople";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/movies/coming-soon" element={<MoviesComingSoon />} />
      <Route path="/movies/top-rated" element={<MoviesTopRated />} />
      <Route path="/movies/most-popular" element={<MoviesPopular />} />

      <Route path="/tv-shows/coming-soon" element={<TvShowsComingSoon />} />
      <Route path="/tv-shows/top-rated" element={<TvShowsTopRated />} />
      <Route path="/tv-shows/most-popular" element={<TvShowsPopular />} />

      <Route path="/people/latest" element={<LatestPeople />} />
      <Route path="/people/popular" element={<PopularPeople />} />
    </Routes>
  );
};

export default AppRoutes;
