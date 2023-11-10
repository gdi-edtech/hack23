import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import DiscussionThreads from "./DiscussionThreads";
import HomePage from "./LearningHomePage";
import Navbar from "../components/Navbar";

const Home = () => {
  const [intro, updateIntro] = useState("insert text here");
  const imageUrlLearn = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699640845/Learn_Button_pancab.png';
  const imageUrlTeach = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699641120/Teach_Button_4_akhq0m.png';

  const buttonLearnStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "#0070C1",
    width: "300px",
    height: "300px",
    marginTop: "20vh", // Add margin bottom for space
  };

  const buttonTeachStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "#299547",
    width: "300px",
    height: "300px",
    marginTop: "20vh", // Add margin bottom for space
  };

  return (
    <>
      <div>
        {/* Your other content */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {/* Button with color EBCD54 */}
          <Link to="/learn">
            <Button variant="primary" style={buttonLearnStyle}>
              <img src={imageUrlLearn} alt="learn logo" style={{ maxWidth: "100%", margin: "10px 0" }} />
            </Button>
          </Link>
          {/* MAKE A LINK TO GINA 'S WORK ON CLOUDINARY */}
          <Link to="/lesson">
            <Button variant="primary" style={buttonTeachStyle}>
              <img src={imageUrlTeach} alt="teach logo" style={{ maxWidth: "100%", margin: "10px 0" }} />
            </Button>
          </Link>
        </div>
      </div>
    </>

  );
};

export default Home;
