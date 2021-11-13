import React from "react";

function About() {
  return (
    <div className="main about" id="about-page">
      <div className="about-desc">
        <span className="heading-meta"> About me</span>
        <h2 className="about-heading"> Who am I?</h2>
        <p>
          <strong>Hi, I'm Andrii Dziura.</strong>I am a junior front-end
          developer. Self-disciplined, always hard working and studying
          developer, who wants to learn new skills and improve his level.
        </p>
      </div>
      <div className="row animation">
        <div className="col-md-3 animated-box">
          <div className="services color-1">
            <span className="icon-2">
              <i className="far fa-lightbulb"></i>
              <h3>HTML</h3>
            </span>
          </div>
        </div>
        <div className="col-md-3 animated-box">
          <div className="services color-2">
            <span className="icon-2">
              <i className="fab fa-css3-alt"></i>
              <h3>CSS</h3>
            </span>
          </div>
        </div>
        <div className="col-md-3 animated-box">
          <div className="services color-3">
            <span className="icon-2">
              <i className="fab fa-js-square"></i>
              <h3>Java Script</h3>
            </span>
          </div>
        </div>
        <div className="col-md-3 animated-box">
          <div className="services color-4">
            <span className="icon-2">
              <i className="fab fa-bootstrap"></i>
              <h3>Bootstrap</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
