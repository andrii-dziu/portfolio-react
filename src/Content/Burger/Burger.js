import React from "react";

function Burger() {
  return (
    <div className="adapt-menu">
      <div className=" navbar navbar-phone">
        <span className="burger">
          <i className="fas fa-bars"></i>
        </span>
        <div className="hidden navigation-items">
          <ul className="nav flex-row ">
            <li className="nav-item nav-hide navigation-item">
              <a className="nav-link " href="#home-page">
                Home
              </a>
            </li>
            <li className="nav-item navigation-item">
              <a className="nav-link" href="#about-page">
                About
              </a>
            </li>
            <li className="nav-item navigation-item">
              <a className=" nav-link" href="#education-page">
                Education
              </a>
            </li>
            <li className="nav-item navigation-item">
              <a className=" nav-link" href="#skills-page">
                Skills
              </a>
            </li>
            <li className="nav-item nav-hide navigation-item">
              <a className=" nav-link" href="#contacts-page">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Burger;
