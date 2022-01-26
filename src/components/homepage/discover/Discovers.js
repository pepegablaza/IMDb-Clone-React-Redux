import React, { useEffect } from "react";
import { connect } from "react-redux";
import discoverActions from "../../../store/actions/homepage/discoverActions";
import Discover from "./Discover";

const Discovers = ({
  discovers,
  getDiscovers,
  nextDiscover,
  prevDiscover,
  activeIndex,
}) => {
  useEffect(() => {
    getDiscovers();
  }, []);

  let end = activeIndex + 1;
  let slicedDiscovers = discovers.slice(activeIndex, end);
  return (
    <div className="discovers">
      {activeIndex > 0 ? (
        <div className="cursor l" onClick={prevDiscover}>
          <i className="fas fa-arrow-left"></i>
        </div>
      ) : (
        <div> </div>
      )}
      {slicedDiscovers.map((discover) => (
        <Discover
          key={discover.id}
          img={discover.backdrop_path}
          poster={discover.poster_path}
          title={discover.name}
          overview={discover.overview}
        />
      ))}
      {activeIndex === discovers.length - 1 ? (
        <div></div>
      ) : (
        <div className="cursor r" onClick={nextDiscover}>
          <i className="fas fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  discovers: state.homepage.discover.data,
  activeIndex: state.homepage.discover.activeIndex,
});

const mapDispatchToProps = {
  getDiscovers: discoverActions.getDiscovers,
  nextDiscover: discoverActions.next,
  prevDiscover: discoverActions.prev,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discovers);
