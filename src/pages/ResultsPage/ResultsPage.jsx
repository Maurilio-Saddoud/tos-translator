import React from "react";
import ResultsPageContainer from "../../containers/ResultsPageContainer";

const ResultsPage = ({ contract, file }) => {
  return (
    <div className="results-page-container">
      <ResultsPageContainer file={file} contract={contract} />
    </div>
  );
};

export default ResultsPage;
