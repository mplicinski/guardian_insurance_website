import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white bg-primary-cstm">
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom"></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>The Guardian Agency
              </h5>
              <p>
                Learn how we can help guard your assests and provide the best
                coverage for whatever your insurance needs are.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home"></i>
                33 W Higgins Rd, Suite 2100
                <br />
                South Barrington, IL 60010
              </p>
              <p>
                <i className="fas fa-home"></i>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                Personal: service@emrz-ins.com <br />
                Commercial: erzinsurance@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#fff" }} /> +1
                (847) 485-1500
              </p>
              <p>
                <FontAwesomeIcon icon={faFax} style={{ color: "#fff" }} /> +1
                (847) 708-6700
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
