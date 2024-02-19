import React from "react";
import ResultsPageContainer from "../../containers/ResultsPageContainer";

const ResultsPage = ({ contract }) => {
  return (
    <div className="results-page-container">
      <ResultsPageContainer contract={contract} />
    </div>
  );
};

export default ResultsPage;
