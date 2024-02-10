import React, { useState } from "react";
import OpeningHook from "../../components/OpeningHook";
import CallToAction from "../../components/CallToAction";
import "./styles.css";
import { Grid } from "@mui/material";
import TitleComponent from "../../components/TitleComponent";
import NavButton from "../../components/NavButton";
import SelectFileButtonComponent from "../../components/SelectFileButtonComponent";
import FileTagComponent from "../../components/FileTagComponent";

const ContractInputContainer = () => {
  const [file, setFile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setInputKey(Date.now()); // Reset the key, which resets the input
  };

  return (
    <div className="contract-input-container">
      <Grid container>
        <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <div className="contract-input-content-container">
            <TitleComponent />
            <div className="contract-input-component-spacer">
              <p className="label">Paste Text:</p>
              <div className="text-input-container">
                <textarea
                  className="contract-text"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  placeholder="By signing this contract, you forfeit..."
                  name="Text1"
                  cols="100"
                  rows="13"
                ></textarea>
              </div>

              <p className="label">Or submit file:</p>
              <div className="file-upload-container">
                <SelectFileButtonComponent
                  handleFileChange={handleFileChange}
                  inputKey={inputKey}
                />
                {file && (
                  <FileTagComponent
                    fileName={file.name}
                    cancelFile={handleRemoveFile}
                  />
                )}
              </div>
            </div>
            <NavButton buttonText={"Translate"} route={"/results"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContractInputContainer;
