import React from "react";
import Movies from "../../components/movies/mostPopular/Movies";
import DataPageContainer from "../../components/ui/cotainers/DataPageContainer";

const MoviesPopular = () => {
  return (
    <DataPageContainer>
      <Movies />
    </DataPageContainer>
  );
};

export default MoviesPopular;
