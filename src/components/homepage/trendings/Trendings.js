import React, { useEffect } from "react";
import { IMG_API } from "../../../services/api";
import { connect } from "react-redux";
import Trending from "./Trending";
import trendingActions from "../../../store/actions/homepage/trendingActions";

const Trendings = ({ getTrendings, trendings }) => {
  useEffect(() => {
    getTrendings();
  }, [getTrendings]);

  return (
    <div className="trendings">
      {trendings.map((trending) => {
        return (
          <Trending
            key={trending.id}
            img={`${IMG_API}${trending.poster_path}`}
            title={trending.original_title}
            name={trending.original_name}
            rating={trending.vote_average}
            votesCount={trending.vote_count}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trendings: state.homepage.trending.data,
});

const mapDispatchToProps = {
  getTrendings: trendingActions.getTrendings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trendings);
