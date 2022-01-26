import React from "react";

const DataPageContainer = ({ children }) => {
  return (
    <div className="data-page-container">
      <div className="content">{children}</div>
    </div>
  );
};

export default DataPageContainer;
