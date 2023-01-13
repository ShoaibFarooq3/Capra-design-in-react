import React from "react";
import { Icon } from "@iconify/react";
import phoneandtab from "../images/phoneandtab.png";

const ChooseUs = () => {
  return (
    <div>
      {/* <!-- Features area --> */}
      <div className="features-4 pd-100" id="features">
        <div className="features-4-1">
          <div className="container">
            <div className="row aic">
              <div
                className="col-lg-6 wow fadeInLeft Hero_Page_style"
                data-wow-delay="0.2s"
              >
                <div className="features-right">
                  <div className="title">
                    <h6>Why Choose Us</h6>
                    <h2>
                      Lorem Ipsum Dolor Sit <br></br>
                      <span className="fw-bold custom_ColorSpan">
                        Adipiscing Elit
                      </span>{" "}
                      .
                    </h2>
                    <p className="Para_Text_Custom">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eget quam fusce ac risus, proin amet. Porttitor id nulla
                      in sit nec, proin eu eget non. Sit ac nec quis nullam sed
                      interdum.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeInLeft Hero_Page_style22"
                data-wow-delay="0.4s"
              >
                <div className="features-4-img">
                  <img src={phoneandtab} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Features area --> */}
    </div>
  );
};

export default ChooseUs;
