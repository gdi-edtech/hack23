import React, { useState } from "react";

const Home = () => {
  const [intro, updateIntro] = useState("insert text here");

  //   useEffect(() => {
  //     async function getIntro() {
  //       try {
  //         const response = await fetch('/api/hello');
  //         const fetchedIntro = await response.json();
  //         console.log(fetchedIntro);
  //         updateIntro(fetchedIntro);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getIntro();
  //   }, []);
  return (
    <div id="app">
      <p>asfasf</p>
      <p>{intro}</p>
    </div>
  );
};

export default Home;
