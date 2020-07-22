import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./css/homepage.css";
import Fade from "react-reveal/Fade";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="col-md-12">
          <img
            className="img-hero"
            src="https://www.thespruce.com/thmb/jMWKVuUcdS3O9GGmEIeAL1Vw9XE=/1885x1414/smart/filters:no_upscale()/wooden-vegetable-garden-boxes-977692070-f82254f843e148b5adb7eb02c5ca4fc8.jpg"
            alt="bv"
          />
          <div className="col-md-12">
            <div className="hero-text">Learn about the food we eat</div>
            <img
              className="hero-text-img"
              src="https://img.icons8.com/plasticine/100/000000/leaf.png"
              alt="logo"
            />
          </div>
          <Fade bottom>
            <div className="container-fluid about-info">
              <div className="row">
                <div className="col-12 mt-3">
                  <div className="card ">
                    <div className="card-horizontal">
                      <div className="img-square-wrapper">
                        <img
                          className="about-info-img"
                          src="https://i0.wp.com/shoppeblack.us/wp-content/uploads/2019/04/fresh_future_farm-0219.jpg?fit=1500%2C1000&ssl=1"
                          alt="cap"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="about-card-title">
                          The food we eat has alot of power!
                        </h4>
                        <p className="about-card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ornare massa eget egestas purus.
                          Id faucibus nisl tincidunt eget nullam non. Tellus in
                          metus vulputate eu. Velit sed ullamcorper morbi
                          tincidunt. Mattis molestie a iaculis at erat
                          pellentesque adipiscing commodo elit. Tellus at urna
                          condimentum mattis pellentesque id nibh. Amet justo
                          donec enim diam vulputate ut pharetra sit amet.
                        </p>
                        <br />
                        <div className="view-plants-btn" id="button-2">
                          <div id="slide"></div>
                          <a href="/profiles">View Info</a>
                        </div>
                        <br />
                        <img
                          className="about-text-img"
                          src="https://img.icons8.com/plasticine/100/000000/leaf.png"
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Homepage;
