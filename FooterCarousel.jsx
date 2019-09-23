import React, { Component } from "react";
import Slider from "react-slick";
import "./css/footerCarousel.css";

class FooterCarousel extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider autoplay>
          <div className="footerCarousel">
            <div className="container footer-contain">
              <div className="owl-carousel partnerLogoSlider slick-slider slider-initialized">
                <div className="slick-list draggable">
                  <div className="slick-track">
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="-5"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-04.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="-4"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-05.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="-3"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-01.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="-2"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-02.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="-1"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-03.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                    <div
                      className="slide slick-slide slick-cloned"
                      tabIndex="-1"
                      data-slick-index="0"
                      aria-hidden="true"
                    >
                      <div className="partnersLogo partner">
                        <img
                          src="http://themes.iamabdus.com/bigbag/2.1/img/home/partners/partner-01.png"
                          alt="partner1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

export default FooterCarousel;
