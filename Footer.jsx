import React, { Component } from "react";
import "./css/footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer foot">
          <div className="container footer-contain">
            <div className="row">
              <div className="col-md-2 col-12">
                <div className="footerLink">
                  <h5>ACCESSORIES</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="...">Link</a>
                    </li>
                    <li>
                      <a href="...">Link2</a>
                    </li>
                    <li>
                      <a href="...">Link3</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="footerLink">
                  <h5>BRANDS</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="...">Link</a>
                    </li>
                    <li>
                      <a href="...">Link2</a>
                    </li>
                    <li>
                      <a href="...">Link3</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="footerLink">
                  <h5>ACCESSORIES</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="...">Link</a>
                    </li>
                    <li>
                      <a href="...">Link2</a>
                    </li>
                    <li>
                      <a href="...">Link3</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="footerLink">
                  <h5>GET IN TOUCH</h5>
                  <ul className="list-unstyled">
                    <li>Call us at (777)-777-7777</li>
                    <li>
                      <a href="...">naeem.sanders0@gmail.com</a>
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li>
                      <a href="...">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="...">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="...">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="newsletter news">
                  <h4>Newsletter</h4>
                  <h3>Sign up now</h3>
                  <p>
                    Enter your email address and get notified about new
                    products.
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your email"
                      aria-describedby="basic-addon2"
                    />
                    <a
                      href="..."
                      className="input-group-addon"
                      id="basic-addon2"
                    >
                      go
                      <i className="fa fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
