import React from "react";
import "./styles.css";

const SelectFileButtonComponent = ({ handleFileChange, inputKey }) => {
  return (
    <div className="select-file-button-container">
      <input
        id="fileUpload"
        type="file"
        hidden
        key={inputKey}
        onChange={(target) => handleFileChange(target)}
      />
      <label htmlFor="fileUpload" className="button-text">
        select file
      </label>
    </div>
  );
};

export default SelectFileButtonComponent;
