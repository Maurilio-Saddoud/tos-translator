import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import React from "react";
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.url} path={route.url} element={route.component} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
