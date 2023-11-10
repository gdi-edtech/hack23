import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import DiscussionThreads from "./DiscussionThreads";


const Home = () => {
  const [intro, updateIntro] = useState("insert text here");
  const imageUrl = 'https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png';

  return (
    <div id="app">
      <img src={imageUrl} alt="logo" />
      <p>{intro}</p>
      
      {/* Button with color EBCD54 */}
      <Button variant="primary" style={{ backgroundColor: "#EBCD54", width: "200px", height: "200px" }}>
        LEARN
      </Button>

      {/* Button with color #273D0E */}
      <Button variant="secondary" style={{ backgroundColor: "#273D0E", width: "200px", height: "200px" }}>
        TEACH
      </Button>

    </div>
  );
};

export default Home;
