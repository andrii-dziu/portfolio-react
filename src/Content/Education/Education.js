import React from "react";
import EducationItem from "./EducationItem/EducationItem";
import PropTypes from "prop-types";

function Education({ items }) {
  return (
    <div className="main education" id="education-page">
      <div className="education-desc">
        <span className="heading-meta"> Education</span>
        <h2 className="about-heading"> Education</h2>
      </div>
      {items.map((el) => {
        return <EducationItem item={el} key={el.id} />;
      })}
    </div>
  );
}

Education.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Education;
