import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router  >
  </React.StrictMode>,
  document.getElementById("root")
);
