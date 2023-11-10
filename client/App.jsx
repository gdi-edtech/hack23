import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/App.scss";
import Home from "./containers/Home";
import UserProfile from "./containers/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
