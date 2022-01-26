import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import mostPopularActions from "../../../store/actions/moviesTv/mostPopularActions";
import DataComponentTable from "../../../components/ui/cotainers/DataComponentTable";
import TableSingleData from "../../ui/customComponents/TableSingleData";

const Movies = ({ getMovies, movies, loadMore }) => {
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <DataComponentTable
      loadMore={loadMore}
      title={"Most Popular Movies"}
      overview={
        "Our Most Popular charts use data from the search behavior of IMDb's more than 250 million monthly unique visitors to rank the hottest, most buzzed about movies and TV shows."
      }
    >
      {movies.map((movie, id) => {
        return (
          <TableSingleData
            key={movie.id}
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
  movies: state.movies.mostPopular.data,
  page: state.movies.mostPopular.page,
});

const mapDispatchToProps = {
  getMovies: mostPopularActions.getMostPopular,
  geMovieYear: mostPopularActions.getMovieYear,
  loadMore: mostPopularActions.loadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
