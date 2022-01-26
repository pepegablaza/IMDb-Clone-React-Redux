import React from "react";
import TvShows from "../../components/tvshows/mostPopular/TvShows";
import DataPageContainer from "../../components/ui/cotainers/DataPageContainer";

const TvShowsPopular = () => {
  return (
    <DataPageContainer>
      <TvShows />
    </DataPageContainer>
  );
};

export default TvShowsPopular;
