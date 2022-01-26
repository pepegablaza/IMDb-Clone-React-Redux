import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IMG_API } from "../../../services/api";
import featureActions from "../../../store/actions/homepage/featureActions";
import Feature from "./Feature";
import Cursors from "../../ui/customComponents/Cursors";

const Features = ({
  getFeatures,
  features,
  startIndex,
  endIndex,
  nextFeature,
  prevFeature,
}) => {
  useEffect(() => {
    getFeatures();
  }, [getFeatures]);

  let slicedFeatures = features.slice(startIndex, endIndex);

  return (
    <div className="features">
      <div className="title">
        <h1>Featured Today</h1>
      </div>

      <div className="features-data">
        <Cursors
          data={features}
          startIndex={startIndex}
          endIndex={endIndex}
          nextData={nextFeature}
          prevData={prevFeature}
        />
        {slicedFeatures.map((feature) => {
          return (
            <Feature
              key={feature.id}
              poster={`${IMG_API}${feature.poster_path}`}
              img={`${IMG_API}${feature.backdrop_path}`}
              title={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  features: state.homepage.feature.data,
  startIndex: state.homepage.feature.startIndex,
  endIndex: state.homepage.feature.endIndex,
});

const mapDispatchToProps = {
  getFeatures: featureActions.getFeatures,
  nextFeature: featureActions.nextFeature,
  prevFeature: featureActions.prevFeature,
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
