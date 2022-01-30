import React from "react";

import "./footer.style.scss";
import { contactText } from "../../data/contactText.data";

const Footer = () => (
  <div className="footer bg-dark-gray text-light-gray pt-3 pb-1 px-5 position-absolute bottom-0">
    <div className="footer-up my-3">
      <div className="row">
        <div className="footer-title fs-6 fw-lighter mb-3 col-md-4 ">Contact Us</div>
        <div className="footer-content-div col-md-2 d-flex">
            <div className="footer-content-icon me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="footer-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <a className="link footer-content-text text-light-gray" href={`tel:${contactText.phone}`}>{contactText.phone}</a>
        </div>
        <div className="footer-content-div col-md-2 d-flex">
            <div className="footer-content-icon me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="footer-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            
            <a className="link footer-content-text text-light-gray" href={`mailto:${contactText.email}`}>{contactText.email}</a>
        </div>
        <div className="footer-content-div col-md-4 d-flex">
            <div className="footer-content-icon me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="footer-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="footer-content-text">
              {contactText.address}
            </div>
        </div>
      </div>
    </div>
    <div className="splitter"></div>
    <div className="copyright text-center mt-2">@2022 OapleDesign Inc.</div>
  </div>
);

export default Footer;
