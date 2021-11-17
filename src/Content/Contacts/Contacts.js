import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
function Contacts() {
  return (
    <div className="main contacts" id="contacts-page">
      <div className="contacts-heading">
        <span className="heading-meta">Get in touch</span>
        <h2 className="about-heading">Contact</h2>
      </div>
      <div className="row contacts-row">
        <div className="col-lg-12 col-xl-6">
          <div className="contact-item">
            <div className="icon">
              <i className="far fa-envelope " id="icon-center">
                <FaRegEnvelope />
              </i>
            </div>
            <div className="text">
              <p className="contact-p">
                <a href="mailto:Dzura1996das@gmail.com">
                  Dzura1996das@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-map-marked-alt" id="icon-center">
                <FaMap />
              </i>
            </div>
            <div className="red text">
              <p className="contact-p"> Ukraine, Rivne city</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-phone" id="icon-center">
                <FaPhone />
              </i>
            </div>
            <div className="text">
              <p className="contact-p">
                <a href="tel:+380964370808">+38 (096) 437-08-08</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6 contacts-form">
          <div className="row">
            <div className="col-md-10">
              <form action>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name
                    id="message"
                    cols="30"
                    rows="7 "
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-send-message"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
