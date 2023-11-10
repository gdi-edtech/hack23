import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/App.scss";
import Home from "./containers/Home";
import UserProfile from "./containers/UserProfile";
import DiscussionThreads from "./containers/DiscussionThreads";
import HomePage from "./containers/LearningHomePage";
import LessonPost from "./components/LessonPost";

import TeachingContainer from "./containers/TeachingContainer";
import UploadContent from "./containers/UploadContent";

import AboutPage from "./containers/AboutPage";
import NavBar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/threads" element={<DiscussionThreads />} />
        <Route path="/lesson" element={<LessonPost />} />

        <Route path="/teaching" element={<TeachingContainer />} />
        <Route path="/uploadContent" element={<UploadContent />} />

        <Route path="/learn" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
