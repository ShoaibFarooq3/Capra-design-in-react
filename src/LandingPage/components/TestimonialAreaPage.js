import React from "react";
import "../styles/Main_Style_File.css";

const TestimonialAreaPage = () => {
  return (
    <div>
      {/* <!-- Testimonial area --> */}
      <div className="pd-80" id="testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-11  text-center wow fadeInUp Hero_Page_style_right1"
              data-wow-delay="0.2s"
            >
              <div className="title">
                <h6>Testimonial</h6>
                <h2>
                  What Our Happy
                  <span className="custom_ColorSpan"> Client Say.</span>
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
            <div className="col-lg-12">
              <div className="owl-carousel t-c-4 owl-loaded ">
                <div className="owl-stage-outer">
                  <div className="owl-stage OWL_Stage_1">
                    <div id={1} className="owl-item cloned Cloned_Style">
                      <div
                        className="single-c-item wow fadeInRight Hero_Page_style22_right"
                        data-wow-delay="0.1s"
                      >
                        <div className="quote-left">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse sed magna eget nibh in turpis.
                          Consequat duis diam lacus arcu.
                        </h4>
                        <div className="t-content aic dfx">
                          <div className="t-image">
                            <img
                              src="./saastec Html Template_files/team-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="t-text">
                            <h6>
                              Anna James{" "}
                              <span>CEO &amp; Founder Brudge Contruction</span>
                            </h6>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                    </div>
                    <div id={2} className="owl-item cloned Cloned_Style">
                      <div
                        className="single-c-item wow fadeInRight Hero_Page_style22_right"
                        data-wow-delay="0.1s"
                      >
                        <div className="quote-left">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <h4>
                          Faucibus venenatis felis id augue sit cursus
                          pellentesque enim Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Cursus nibh mauris, nec
                          turpis orci lectus maecenas.
                        </h4>
                        <div className="t-content aic dfx">
                          <div className="t-image">
                            <img
                              src="./saastec Html Template_files/team-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="t-text">
                            <h6>
                              Andrew Simmons<span>Team Lead at Alpha Tech</span>
                            </h6>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                    </div>
                    <div id={3} className="owl-item cloned Cloned_Style">
                      <div
                        className="single-c-item wow fadeInRight Hero_Page_style22_right"
                        data-wow-delay="0.1s"
                      >
                        <div className="quote-left">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <h4>
                          Suspendisse sed magna eget nibh in turpis. Consequat
                          duis diam lacus arcu. Faucibus venenatis felis id
                          augue sit cursus pellentesque enim
                        </h4>
                        <div className="t-content aic dfx">
                          <div className="t-image">
                            <img
                              src="./saastec Html Template_files/team-5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="t-text">
                            <h6>
                              Jhon Kenny{" "}
                              <span>Marketing Manager SouthHams Marketing</span>
                            </h6>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <i className="fas fa-quote-right"></i>
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
      {/* <!-- End Testimonial area --> */}
    </div>
  );
};

export default TestimonialAreaPage;
