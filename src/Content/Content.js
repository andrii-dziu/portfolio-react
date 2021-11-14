import React from "react";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";

function Content() {
  return (
    <div className="content">
      <Home />
      <About />
      <Education />
      <Skills />
      <Contacts />
    </div>
  );
}

export default Content;
