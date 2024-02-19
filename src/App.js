import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import ContractInputPage from "./pages/ContractInputPage";

function App() {
  const [contract, setContract] = useState("");

  return (
    <div>
      <Router>
        <Routes>
          {/* {routes.map((route) => (
            <Route key={route.url} path={route.url} element={route.component} />
          ))} */}
          <Route path={"/"} element={<LandingPage />} />
          <Route
            path={"/contractInput"}
            element={<ContractInputPage setContract={setContract} />}
          />
          <Route
            path={"/results"}
            element={<ResultsPage contract={contract} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
