import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import mostPopularActions from "../../../store/actions/tvShows/mostPopularActions";
import DataComponentTable from "../../ui/cotainers/DataComponentTable";
import TableSingleData from "../../ui/customComponents/TableSingleData";

const TvShows = ({ getTvShows, tvShows, loadMore }) => {
  useEffect(() => {
    getTvShows();
  }, []);

  console.log(tvShows);
  return (
    <DataComponentTable
      loadMore={loadMore}
      title={"Most Popular TV Shows"}
      overview={
        "Our Most Popular charts use data from the search behavior of IMDb's more than 250 million monthly unique visitors to rank the hottest, most buzzed about movies and TV shows."
      }
    >
      {tvShows.map((show, id) => {
        return (
          <TableSingleData
            key={show.id}
            number={id + 1}
            year={show.first_air_date}
            img={`${IMG_API}${show.poster_path}`}
            title={show.name}
            rating={show.vote_average}
          />
        );
      })}
    </DataComponentTable>
  );
};

const mapStateToProps = (state) => ({
  tvShows: state.tvShows.mostPopular.data,
});

const mapDispatchToProps = {
  getTvShows: mostPopularActions.getMostPopular,
  geMovieYear: mostPopularActions.getMovieYear,
  loadMore: mostPopularActions.loadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
