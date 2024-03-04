import React from "react";
import "./styles.css";
import ContractInputContainer from "../../containers/ContractInputContainer";

const ContractInputPage = ({ setContract, setFile, file }) => {
  return (
    <div className="contract-input-page-container" >
      <ContractInputContainer
        file={file}
        setFile={setFile}
        setContract={setContract}
      />
    </div>
  );
};

export default ContractInputPage;
