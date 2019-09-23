import React, { Component } from "react";
import "./css/copyright.css";

class Copyright extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="copyRight copy">
          <div className="container copy-contain">
            <div className="row">
              <div className="col-md-7 col-12 copy-text-1">
                <p>&copy; 2019 Copyright Nasand Store by Naeem Sanders</p>
              </div>
              <div className="col-md-5 col-12 copy-text">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/footer/card1.png"
                      alt="card1"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/footer/card2.png"
                      alt="card2"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/footer/card3.png"
                      alt="card3"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/footer/card4.png"
                      alt="card4"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Copyright;
