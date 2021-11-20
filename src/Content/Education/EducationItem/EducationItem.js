import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

function EducationItem({ item }) {
  return (
    <div className="uk-container uk-padding">
      <div className="uk-timeline">
        <div className="uk-timeline-item"></div>
        <div className="uk-timeline-item">
          <div className="uk-timeline-icon">
            <span className="uk-badge">
              <div className="fas fa-check-circle">
                <BsCheckCircleFill />
              </div>
            </span>
          </div>
          <div className="uk-timeline-content">
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                  <h3 className="uk-card-title">
                    <time datetime="2020-07-07">{item.title}</time>
                  </h3>
                  <span className="uk-label uk-label-warning uk-margin-auto-left">
                    <small>{item.period}</small>
                  </span>
                </div>
              </div>
              <div className="uk-card-body">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EducationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EducationItem;
