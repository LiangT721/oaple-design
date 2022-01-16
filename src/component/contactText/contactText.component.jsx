import React from "react";

import Text from "../text/text.component";

import { contactText } from "../../data/contactText.data";

import "./contactText.style.scss";

const ContactText = () => (
  <div className="contact-text-container p-5">
    <div className="contact-text-header text-center page-header">Contact</div>
    <div className="contact-text-content pt-4">
      <div className="row">
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-office-title contact-text-content-title">
            Office
          </div>
          <div className="contact-text-content-text">
            <Text text={contactText.address} />
          </div>
        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-hours-title contact-text-content-title">
            Hours
          </div>
          <div className="contact-text-content-text">{contactText.hours}</div>
        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-tel-title contact-text-content-title">
            Tel
          </div>
          <div className="contact-text-content-text">{contactText.phone}</div>
        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-email-title contact-text-content-title">
            Email
          </div>
          <div className="contact-text-content-text">{contactText.email}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactText;
