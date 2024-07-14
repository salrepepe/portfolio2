import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading";
import "./i18";

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter basename={`/${localStorage.getItem("i18nextLng")}`}>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
