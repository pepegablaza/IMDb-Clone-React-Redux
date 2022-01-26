import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import topRatedActions from "../../../store/actions/moviesTv/topRatedActions";
import DataComponentTable from "../../ui/cotainers/DataComponentTable";
import TableSingleData from "../../ui/customComponents/TableSingleData";
import Overview from "./Overview";

const Movies = ({ getMovies, movies, loadMore }) => {
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <DataComponentTable
      title={"IMDb Top Movies"}
      paragraph={"IMDb Top movies as rated by regular IMDb voters."}
      overview={<Overview />}
      loadMore={loadMore}
    >
      {movies.map((movie, id) => {
        return (
          <TableSingleData
            key={id}
            number={id + 1}
            year={movie.release_date}
            img={`${IMG_API}${movie.poster_path}`}
            title={movie.title}
            rating={movie.vote_average}
          />
        );
      })}
    </DataComponentTable>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.topRated.data,
});

const mapDispatchToProps = {
  getMovies: topRatedActions.getTopRated,
  geMovieYear: topRatedActions.getMovieYear,
  loadMore: topRatedActions.loadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
