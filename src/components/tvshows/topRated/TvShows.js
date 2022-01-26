import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import DataComponentTable from "../../ui/cotainers/DataComponentTable";
import topRatedActions from "../../../store/actions/tvShows/topRatedActions";
import TableSingleData from "../../ui/customComponents/TableSingleData";

const TvShows = ({ getShows, shows, loadMore }) => {
  useEffect(() => {
    getShows();
  }, []);

  console.log(shows);

  return (
    <DataComponentTable
      loadMore={loadMore}
      title={"Top Rated TV Shows"}
      overview={
        "Our Most Popular charts use data from the search behavior of IMDb's more than 250 million monthly unique visitors to rank the hottest, most buzzed about movies and TV shows."
      }
    >
      {shows.map((show, id) => {
        return (
          <TableSingleData
            key={id}
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
  shows: state.tvShows.topRated.data,
});

const mapDispatchToProps = {
  getShows: topRatedActions.getTopRated,
  loadMore: topRatedActions.loadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
