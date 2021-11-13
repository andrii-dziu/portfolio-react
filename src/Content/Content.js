import React from "react";
import About from "./About/About";
import Education from "./Education/Education";
import Home from "./Home/Home";

function Content() {
  return (
    <div className="content">
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default Content;
