import React, { useState, useEffect } from "react";
import "../styles/Main_Style_File.css";
import MainLogo from "../images/logo.png";
const HeaderPage = () => {
  return (
    <div>
      <div className="preloader Div_class_hidden"></div>
      <div id="mainmenu-area-sticky-wrapper" className="sticky-wrapper">
        <div id="mainmenu-area" className="hp4 HP64">
          <div className="header-area header-absolute header-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 w-50">
                  <a href="#/" className="header-logo">
                    <img src={MainLogo} alt="" className="logo-1" />
                    <img src={MainLogo} alt="" className="logo-2" />
                  </a>
                </div>
                <div className="col-lg-7 w-50 t-right">
                  <button className="toggle">
                    <span></span>
                  </button>
                  <div className="mainmenu">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a className="nav-link" href="#features">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="#service">
                            Features
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="#testimonial">
                            Testimonial
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="#faqs">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="header-btn">
                    <a href="#" className="button" id="SignInBtn">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
