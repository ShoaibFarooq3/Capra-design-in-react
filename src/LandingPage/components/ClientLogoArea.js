import React from "react";
import "../styles/Main_Style_File.css";
import Logo2 from "../images/Client2.png";
import Logo1 from "../images/Client1.png";
import Logo3 from "../images/Client3.png";
import Logo4 from "../images/Client4.png";
import Logo5 from "../images/Client5.png";
import Logo6 from "../images/Client6.png";
const ClientLogoArea = () => {
  return (
    <div>
      {/* <!-- Client logo area --> */}
      <div className="c-logo-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="owl-carousel c-logo-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage OWL_Stage_page">
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo1} alt="Logo1" />
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo3} alt="Logo1" />
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo2} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo6} alt="Logo1" />
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo4} alt="Logo1" />
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned DIv_Class_late">
                      <div
                        className="single-logo-item wow fadeInUp Hero_Page_style"
                        data-wow-delay="0.3s"
                      >
                        <div className="single-logo-cell">
                          <img src={Logo5} alt="Logo1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End C Logo area --> */}
      <br></br>
      <br></br>
    </div>
  );
};

export default ClientLogoArea;
