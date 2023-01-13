import React from "react";
// import FacebookImg from '../images/facebook-icon.jpg'
import FacebookIcon from "mdi-react/FacebookIcon";
import TwitterIcon from "mdi-react/TwitterIcon";
import CameraIcon from "mdi-react/CameraIcon";
import GoogleIcon from "mdi-react/GoogleIcon";
import RopsLogo from "../images/logo.png";
const FooterAreaPage = () => {
  return (
    <div>
      {/* <!-- Footer area --> */}
      <div className="footer-area-3 footer-3 footer4">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <a href="#/" className="footer-logo">
                  <img className="footerImage" src={RopsLogo} alt="" />
                </a>
                <p># 1 Data Enrichment Platform.</p>
                <p className="mt-20">
                  Conveniently Enrich Data and Grow exponentially.{" "}
                </p>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-lg-4 col-md-4">
                    <h4>Contact</h4>
                    <p>info@Ropsterm.com</p>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          data-toggle="tooltip"
                          title=""
                          data-placement="left"
                          data-original-title="Facebook"
                        >
                          <span className="mdi mdi-facebook">
                            <FacebookIcon />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/login"
                          target="_blank"
                          data-toggle="tooltip"
                          title=""
                          data-placement="top"
                          data-original-title="Twitter"
                        >
                          <span className="mdi mdi-twitter"></span>
                          <TwitterIcon />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          data-toggle="tooltip"
                          target="_blank"
                          title=""
                          data-placement="bottom"
                          data-original-title="Camera"
                        >
                          <span className="mdi mdi-camera"></span>
                          <CameraIcon />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          target="_blank"
                          title=""
                          data-placement="right"
                          data-original-title="Google"
                        >
                          <span className="mdi mdi-google"></span>
                          <GoogleIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>
                  All Right Reserved by{" "}
                  <a href="#" target="_blank">
                    © 2019 Lift Media.{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer area --> */}
    </div>
  );
};

export default FooterAreaPage;
