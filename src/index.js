import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PerLoader from "./perLoader";
import { inject } from "@vercel/analytics";

inject()

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <PerLoader />
  </React.StrictMode>,
  document.getElementById("preLoader-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
