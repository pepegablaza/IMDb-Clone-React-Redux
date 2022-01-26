import React from "react";
import TvShows from "../../components/tvshows/topRated/TvShows";
import DataPageContainer from "../../components/ui/cotainers/DataPageContainer";

const MoviesTopRated = () => {
  return (
    <DataPageContainer>
      <TvShows />
    </DataPageContainer>
  );
};

export default MoviesTopRated;
