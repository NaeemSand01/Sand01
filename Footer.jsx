import React from "react";
import "./css/footer.css";

const Footer = props => {
  console.log(props);
  return (
    <React.Fragment>
      <footer className="bg-secondary da-section">
        <div className="container contain-text">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="h2">Lets Eat!</div>
              <p>naeem.sanders0@gmail.com</p>
            </div>

            <div className="col-md-4 col-12">
              <div className="footerLink">
                <h5>Follow Us!</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="..." className="da-social-link">
                      Facebook <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="..." className="da-social-link">
                      Twitter <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="..." className="da-social-link">
                      Instagram <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="..." className="da-social-link">
                      Google <i className="fab fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="h6 pb-2">Copyright</div>
              <p>@ 2019 Pandapp. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
