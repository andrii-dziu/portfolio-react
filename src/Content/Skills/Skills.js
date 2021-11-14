import React from "react";

function Skills() {
  return (
    <div className="main skills" id="skills-page">
      <div className="skills-heading">
        <span className="heading-meta"> skills</span>
        <h2 className="about-heading"> my skills</h2>
      </div>
      <div className="progress-heading">
        <span className="skill-name">HTML</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            90%
          </div>
        </div>
        <span className="skill-name">CSS</span>
        <div className="progress">
          <div
            className="progress-bar  progress-bar-striped   bg-success "
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            85%
          </div>
        </div>
        <span className="skill-name">JAVASCRIPT</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-info "
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <span className="skill-name">NODE.JS/EXPRESS</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            15%
          </div>
        </div>
        <span className="skill-name">ANGULAR/REACT</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            style={{ width: "15%" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            15%
          </div>
        </div>
        <span className="skill-name">BOOTSTRAP</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-dark"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            90%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
