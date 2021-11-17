import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Education() {
  return (
    <div className="main education" id="education-page">
      <div className="education-desc">
        <span className="heading-meta"> Education</span>
        <h2 className="about-heading"> Education</h2>
      </div>
      <div className="uk-container uk-padding">
        <div className="uk-timeline">
          <div className="uk-timeline-item"></div>
          <div className="uk-timeline-item">
            <div className="uk-timeline-icon">
              <span className="uk-badge">
                <i className="fas fa-check-circle">
                  <BsCheckCircleFill />
                </i>
              </span>
            </div>
            <div className="uk-timeline-content">
              <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div className="uk-card-header">
                  <div className="uk-grid-small uk-flex-middle" uk-grid>
                    <h3 className="uk-card-title">
                      <time datetime="2020-07-07">
                        National University of Water and Environmental
                        Engineering
                      </time>
                    </h3>
                    <span className="uk-label uk-label-warning uk-margin-auto-left">
                      <small>September 2013 - August 2017</small>
                    </span>
                  </div>
                </div>
                <div className="uk-card-body">
                  <p>Bachelor degree in Economics and Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container uk-padding">
        <div className="uk-timeline">
          <div className="uk-timeline-item"></div>
          <div className="uk-timeline-item">
            <div className="uk-timeline-icon">
              <span className="uk-badge">
                <i class="fas fa-check-circle">
                  <BsCheckCircleFill />
                </i>
              </span>
            </div>
            <div className="uk-timeline-content">
              <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div className="uk-card-header">
                  <div className="uk-grid-small uk-flex-middle" uk-grid>
                    <h3 className="uk-card-title">
                      <time datetime="2020-07-07">IT Education</time>
                    </h3>
                    <span className="uk-label uk-label-warning uk-margin-auto-left">
                      <small>January 2021 - now</small>
                    </span>
                  </div>
                </div>
                <div className="uk-card-body">
                  <p>
                    Studying on private courses , teacher is Senior full-stack
                    developer with 5+ years of experience of programming in
                    different companies . Have learned HTML, CSS, JavaScript,
                    Bootstrap, Git. Angular, Node.js, React on trainee level.
                    Self-stuyding via Youtube, online platfoms demy and Hunter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
