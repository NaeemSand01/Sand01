import React, { Component } from "react";
import "./css/banner.css";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carousel-banner"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-banner"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carousel-banner" data-slide-to={1} />
            <li data-target="#carousel-banner" data-slide-to={2} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner " role="listbox">
            <div className="carousel-item active">
              <div className="view">
                <img
                  className="d-block w-100 banner"
                  src={require("../ecommerceBanner/images/slider-bg1.jpg")}
                  alt="First slide"
                />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption banner-1">
                {/* <figcaption data-qa="card-overlay"></figcaption> */}
                <div className="banner-text-1">
                  <h3>Summer Hat</h3>
                </div>
                <div>
                  <h3 className="banner-text-2">Starts From - $59.00</h3>
                </div>

                <div>
                  <span class="page-scroll">
                    <a href="/" class="btn banner-1-btn primary-btn">
                      Buy Now<i class="fa fa-chevron-right"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100 banner"
                  src={require("../ecommerceBanner/images/slider-bg2.jpg")}
                  alt="Second slide"
                />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                <img
                  className="d-block w-100 banner"
                  src={require("../ecommerceBanner/images/slider-bg3.jpg")}
                  alt="Third slide"
                />
                <div className="mask rgba-black-slight" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </div>
            </div>
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a
            className="carousel-control-prev"
            href="#carousel-banner"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-banner"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*/.Controls*/}
        </div>
        {/*/.Carousel Wrapper*/}
      </React.Fragment>
    );
  }
}

export default Banner;
