import React from "react";

import Text from "../text/text.component";

import { contactText } from "../../data/contactText.data";

import "./contactText.style.scss";

const ContactText = () => {
    const title = ['Content', '联系我们']
    const office = ['office',"地址"]
    const hours = ['hours','工作时间']
    const tel = ['tel','电话']
    const email = ['Email','电子邮箱']
  return(
  <div className="contact-text-container p-5">
    <div className="contact-text-header text-center page-header">
      <Text text={title} />
    </div>
    <div className="contact-text-content pt-4">
      <div className="row">
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-office-title contact-text-content-title">
            <Text text={office} />
          </div>
          <div className="contact-text-content-text">
            {contactText.address}
          </div>
        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-hours-title contact-text-content-title">
          <Text text={hours} />
          </div>
          <div className="contact-text-content-text">{contactText.hours}</div>
        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-tel-title contact-text-content-title">
          <Text text={tel} />
          </div>
          <a className="link contact-text-content-text" href={`tel:${contactText.phone}`}>{contactText.phone}</a>

        </div>
        <div className="contact-text-content-div pt-3 pb-2 col-md-3">
          <div className="contact-text-email-title contact-text-content-title">
          <Text text={email} />
          </div>
          <a className="link contact-text-content-text" href={`mailto:${contactText.email}`}>{contactText.email}</a>
        </div>
      </div>
    </div>
  </div>
)};

export default ContactText;
