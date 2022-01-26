import React from "react";

const Cursors = ({ startIndex, endIndex, data, prevData, nextData }) => {
  return (
    <div className="cursors">
      {startIndex > 0 ? (
        <div className="left" onClick={() => prevData(startIndex, data)}>
          <i className="fas fa-arrow-left"></i>
        </div>
      ) : (
        <div></div>
      )}

      {endIndex < data.length ? (
        <div className="right" onClick={() => nextData(endIndex, data)}>
          <i className="fas fa-arrow-right"></i>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cursors;
