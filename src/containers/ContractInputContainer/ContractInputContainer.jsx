import React, { useState, useRef } from "react";
import "./styles.css";
import { Grid } from "@mui/material";
import TitleComponent from "../../components/TitleComponent";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import SelectFileButtonComponent from "../../components/SelectFileButtonComponent";
import FileTagComponent from "../../components/FileTagComponent";

const ContractInputContainer = ({ setContract }) => {
  const [file, setFile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());
  const textareaRef = useRef(null);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    const contractText = textareaRef.current.value;
    if (contractText) {
      setContract(contractText);
      navigate("/results");
    }
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
                  ref={textareaRef}
                  className="contract-text"
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  placeholder="Paste contract here..."
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
            <div className="nav-button-container">
              <p className="nav-button-text" onClick={() => handleSubmit()}>
                Translate
                <GrFormNextLink size={35} style={{ marginTop: "5px" }} />
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContractInputContainer;
