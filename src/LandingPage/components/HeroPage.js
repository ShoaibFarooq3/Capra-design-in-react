import React from "react";
import "../styles/Main_Style_File.css";
import MainImage from "../images/Overview.jpg";
const HeroPage = () => {
  return (
    <div>
      {/* <!-- Hero area --> */}
      <div className="hero-area o-hi hero-4">
        <div className="container">
          <div className="row aic">
            <div
              className="col-lg-6 wow fadeInLeft Hero_Page_style"
              data-wow-delay="0.2s"
            >
              <h1>Ropstam</h1>
              <h2>Connect and Expand your business with Ropstam.</h2>
              <p>
                One Stop Solution for Websites, Mobile Apps & Custom Softwares.
              </p>
            </div>
            <div
              className="col-lg-6 wow fadeInRight Hero_Page_style22"
              data-wow-delay="0.4s"
            >
              <div className="hero-4-img">
                <img src={MainImage} alt="Main Logo" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Animation --> */}
        <div className="animation-4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <!-- End Hero area --> */}
    </div>
  );
};

export default HeroPage;
