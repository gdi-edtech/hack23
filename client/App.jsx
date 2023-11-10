import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/App.scss";
import Home from "./containers/Home";
import UserProfile from "./containers/UserProfile";
import DiscussionThreads from "./containers/DiscussionThreads";
import HomePage from "./containers/HomePage";
import LessonPost from "./components/LessonPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/threads" element={<DiscussionThreads />} />
        <Route path="/lesson/:id" element={<TeachingContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
