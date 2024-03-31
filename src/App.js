import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import ContractInputPage from "./pages/ContractInputPage";

function App() {
  const [contract, setContract] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route
            path={"/contractInput"}
            element={
              <ContractInputPage
                file={file}
                setFile={setFile}
                setContract={setContract}
              />
            }
          />
          <Route
            path={"/results"}
            element={<ResultsPage file={file} contract={contract} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
