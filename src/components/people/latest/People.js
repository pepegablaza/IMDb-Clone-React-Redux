import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import DataComponentContainer from "../../ui/cotainers/DataComponentContainer";
import ContainerSingleData from "../../ui/customComponents/ContainerSingleData";
import latestPeopleActions from "../../../store/actions/people/latestPeopleActions";

const People = ({ people, startIndex, endIndex, getPeople, next, prev }) => {
  useEffect(() => {
    getPeople();
  }, []);
  let slicedPeople = people.slice(startIndex, endIndex);

  console.log(people);
  return (
    <DataComponentContainer
      paragraph={"IMDb Latest People"}
      title={"People"}
      overview={
        ' IMDb is your definitive source for discovering the latest new movies coming soon to theaters. Long before the movies even reach theaters,go to IMDb to watch the hottest trailers, see photos, find releasedates, read reviews, and learn all about the full cast and crew.IMDb is your ultimate source for new movies and our "Coming Soon"pages provide you an easy way to learn about upcoming movies, manytimes before the final release dates have been announced. As youdiscover new movies, add them to your Watchlist. The IMDb Watchlistis a quick and easy way to track and remember all the upcomin movies that you want to see. Remember, IMDb is your source for new movies.'
      }
      prev={prev}
      next={next}
      startIndex={startIndex}
      endIndex={endIndex}
      data={people}
    >
      {slicedPeople.map((person) => {
        return (
          <ContainerSingleData
            movie={false}
            job={person.known_for_department}
            known_for={person.known_for}
            key={person.id}
            title={person.name}
            img={`${IMG_API}${person.profile_path}`}
            // overview={movie.overview}
          />
        );
      })}
    </DataComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  people: state.people.latest.data,
  startIndex: state.people.latest.startIndex,
  endIndex: state.people.latest.endIndex,
});

const mapDispatchToProps = {
  getPeople: latestPeopleActions.getLatestPeople,
  next: latestPeopleActions.next,
  prev: latestPeopleActions.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
