import React from "react";
import UpdateIcon from "mdi-react/UpdateIcon";
import "../styles/Main_Style_File.css";
import { Icon } from "@iconify/react";

const FeaturesAreaPage = () => {
  return (
    <>
      {/* <!-- Service area --> */}
      <div className="service-4-area pd-80" id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-7 text-center wow fadeInUp Hero_Page_style"
              data-wow-delay="0.2s"
            >
              <div className="title">
                <h2>
                  Lorem Ipsum{" "}
                  <span className="custom_ColorSpan fw-bold">
                    Adipiscing Elit
                  </span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet. Porttitor id nulla in sit
                  nec, proin eu eget non. Sit ac nec quis nullam sed interdum.
                  Elementum sem ultrices erat vestibulum sed pulvinar placerat
                  nec eu.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp Hero_Page_style"
              data-wow-delay="0.2s"
            >
              <div className="single-s-4-item">
                <div className="s-4-icon">
                  <span className="icon-4 mdi mdi-message-video ">
                    <Icon icon="mdi:message-video" />
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <h4>Lorem Ipsum Adipiscing Elit Sit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  facilisi port.
                </p>
                <a href="#">More Details</a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp Hero_Page_style3"
              data-wow-delay="0.3s"
            >
              <div className="single-s-4-item">
                <div className="s-4-icon">
                  <span className="icon-4 mdi mdi-white-balance-incandescent">
                    <Icon icon="mdi:white-balance-incandescent" />
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <h4>Lorem Ipsum Adipiscing Elit Sit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  facilisi port.
                </p>
                <a href="#">More Details</a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp hidden-sm Hero_Page_style22"
              data-wow-delay="0.4s"
            >
              <div className="single-s-4-item">
                <div className="s-4-icon">
                  <span className="icon-4 mdi mdi-update">
                    <UpdateIcon />
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <h4>Lorem Ipsum Adipiscing Elit Sit</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  facilisi port.
                </p>
                <a href="#">More Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Service area --> */}
    </>
  );
};

export default FeaturesAreaPage;
