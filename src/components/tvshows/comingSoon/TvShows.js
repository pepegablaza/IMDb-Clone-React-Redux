import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import comingSoonActions from "../../../store/actions/tvShows/comingSoonActions";
import DataComponentContainer from "../../ui/cotainers/DataComponentContainer";
import ContainerSingleData from "../../ui/customComponents/ContainerSingleData";
import { COMING_TV } from "../../../services/api";

const TvShows = ({ getShows, shows, startIndex, endIndex, next, prev }) => {
  useEffect(() => {
    getShows(COMING_TV);
  }, []);

  let slicedShows = shows.slice(startIndex, endIndex);
  console.log(slicedShows);
  return (
    <DataComponentContainer
      paragraph={"IMDb Coming Soon Movies"}
      overview={
        ' IMDb is your definitive source for discovering the latest new tv shows coming soon to theaters. Long before the show even reach theaters,go to IMDb to watch the hottest trailers, see photos, find releasedates, read reviews, and learn all about the full cast and crew.IMDb is your ultimate source for new show and our "Coming Soon"pages provide you an easy way to learn about upcoming shows, manytimes before the final release dates have been announced. As you discover new show, add them to your Watchlist. The IMDb Watchlistis a quick and easy way to track and remember all the upcomin shows that you want to see. Remember, IMDb is your source for new shows.'
      }
      prev={prev}
      next={next}
      startIndex={startIndex}
      endIndex={endIndex}
      data={shows}
    >
      {slicedShows.map((show) => {
        return (
          <ContainerSingleData
            key={show.id}
            title={show.name}
            img={`${IMG_API}${show.poster_path}`}
            overview={show.overview}
          />
        );
      })}
    </DataComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  shows: state.tvShows.comingSoon.data,
  startIndex: state.tvShows.comingSoon.startIndex,
  endIndex: state.tvShows.comingSoon.endIndex,
});

const mapDispatchToProps = {
  getShows: comingSoonActions.getComingSoon,
  next: comingSoonActions.next,
  prev: comingSoonActions.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
