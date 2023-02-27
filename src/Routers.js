import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RouteGaurd from "./components/RouteGaurd";

//history
import { history } from "./helpers/history";

//pages

function Routers() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <RouteGaurd exact path="/" element={HomePage} />
        <Route path="/login" element={LoginPage} />
        {/* <Link to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
