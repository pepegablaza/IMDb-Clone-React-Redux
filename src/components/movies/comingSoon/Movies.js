import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import comingSoonActions from "../../../store/actions/moviesTv/comingSoonActions";
import DataComponentContainer from "../../ui/cotainers/DataComponentContainer";
import ContainerSingleData from "../../ui/customComponents/ContainerSingleData";

const Movies = ({ getMovies, movies, startIndex, endIndex, next, prev }) => {
  useEffect(() => {
    getMovies();
  }, []);

  let slicedMovies = movies.slice(startIndex, endIndex);

  return (
    <DataComponentContainer
      paragraph={"IMDb Coming Soon Movies"}
      overview={
        ' IMDb is your definitive source for discovering the latest new movies coming soon to theaters. Long before the movies even reach theaters,go to IMDb to watch the hottest trailers, see photos, find releasedates, read reviews, and learn all about the full cast and crew.IMDb is your ultimate source for new movies and our "Coming Soon"pages provide you an easy way to learn about upcoming movies, manytimes before the final release dates have been announced. As youdiscover new movies, add them to your Watchlist. The IMDb Watchlistis a quick and easy way to track and remember all the upcomin movies that you want to see. Remember, IMDb is your source for new movies.'
      }
      prev={prev}
      next={next}
      startIndex={startIndex}
      endIndex={endIndex}
      data={movies}
    >
      {slicedMovies.map((movie) => {
        return (
          <ContainerSingleData
            key={movie.id}
            title={movie.title}
            img={`${IMG_API}${movie.poster_path}`}
            overview={movie.overview}
          />
        );
      })}
    </DataComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.comingSoon.data,
  startIndex: state.movies.comingSoon.startIndex,
  endIndex: state.movies.comingSoon.endIndex,
});

const mapDispatchToProps = {
  getMovies: comingSoonActions.getComingSoon,
  next: comingSoonActions.next,
  prev: comingSoonActions.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
