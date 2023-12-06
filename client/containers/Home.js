import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Home = () => {
  const [intro, updateIntro] = useState("insert text here");
  const imageUrlDo = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699655860/DoOne_gwxxxv.png';
  const imageUrlLearn = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699655860/SeeOne_ma2ksn.png';
  const imageUrlTeach = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699655860/TeachOne_zs48ff.png';

  const buttonDoStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "#86953e",
    width: "300px",
    height: "300px",
    marginTop: "20vh", // Add margin bottom for space
  };

  const buttonLearnStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "#EBCD54",
    width: "300px",
    height: "300px",
    marginTop: "20vh", // Add margin bottom for space
  };

  const buttonTeachStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    backgroundColor: "#4C6D90",
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
          <Link to="/learn">
            <Button variant="primary" style={buttonDoStyle}>
              <img src={imageUrlDo} alt="learn logo" style={{ maxWidth: "100%", margin: "10px 0" }} />
            </Button>
          </Link>
          <Link to="/create-video-lesson">
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
