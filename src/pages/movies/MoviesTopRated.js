import React from "react";
import Movies from "../../components/movies/topRated/Movies";
import DataPageContainer from "../../components/ui/cotainers/DataPageContainer";

const MoviesTopRated = () => {
  return (
    <DataPageContainer>
      <Movies />
    </DataPageContainer>
  );
};

export default MoviesTopRated;
