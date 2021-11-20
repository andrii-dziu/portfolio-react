import React from "react";
import Burger from "./Burger/Burger.js";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import PropTypes from "prop-types";

function Content({ educationList }) {
  return (
    <div className="content">
      <Burger />
      <Home />
      <About />
      <Education items={educationList} />
      <Skills />
      <Contacts />
    </div>
  );
}

Content.propTypes = {
  educationList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Content;
