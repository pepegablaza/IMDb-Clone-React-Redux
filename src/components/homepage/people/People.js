import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import peopleActions from "../../../store/actions/homepage/peopleActions";
import Person from "./Person";

const People = ({
  getPeople,
  peopleData,
  startIndex,
  endIndex,
  nextPerson,
  prevPerson,
}) => {
  useEffect(() => {
    getPeople();
  }, [getPeople]);

  console.log(peopleData);
  let slicedPeople = peopleData.slice(startIndex, endIndex);

  return (
    <div className="people">
      <div className="title">
        <h1>Popular People</h1>
      </div>
      <div className="people-data">
        <div className="cursors">
          {startIndex > 0 ? (
            <div
              className="left"
              onClick={() => prevPerson(startIndex, peopleData)}
            >
              <i className="fas fa-arrow-left"></i>
            </div>
          ) : (
            <div></div>
          )}
          {endIndex < peopleData.length ? (
            <div
              className="right"
              onClick={() => nextPerson(endIndex, peopleData)}
            >
              <i className="fas fa-arrow-right"></i>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {slicedPeople.map((person) => {
          return (
            <Person
              key={person.id}
              img={`${IMG_API}${person.profile_path}`}
              name={person.name}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  peopleData: state.homepage.people.data,
  startIndex: state.homepage.people.startIndex,
  endIndex: state.homepage.people.endIndex,
});

const dispatchToProps = {
  getPeople: peopleActions.getPeople,
  nextPerson: peopleActions.nextPerson,
  prevPerson: peopleActions.prevPerson,
};

export default connect(mapStateToProps, dispatchToProps)(People);
