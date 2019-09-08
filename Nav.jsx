import React, { Component } from "react";
import "../ecommerceHeader/css/ecommerceNav.css";

class Nav extends Component {
  state = {
    hideClass: false
  };

  onMenuClick = e => {
    e.preventDefault();
    this.setState({
      hideClass: !this.state.hideClass
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-main navbar-default navbar-expand-md"
          role="navigation"
        >
          <div className="container">
            <a className="navbar-brand" href="/test">
              <h3>
                <i className="fas fa-store" />
                <span> RE-STOCK</span>
              </h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
              aria-controls="navbar-ex1-collapse"
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={this.onMenuClick}
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className={
                this.state.hideClass
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarResponsive"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown active">
                  <button
                    className="dropdown-toggle nav-link"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="dropdwnMenuLink"
                  >
                    Shop
                  </button>
                  <ul className="nav-list dropdown-menu dropdown-menu-left">
                    <li>
                      <a className="nav-list-item" href="...">
                        Mens
                      </a>
                    </li>
                    <li>
                      <a className="nav-list-item" href="...">
                        Womens
                      </a>
                    </li>
                  </ul>
                  {/* <div
                    className="dropdown-menu"
                    aria-labelledby="dropdwnMenuLink"
                  >
                    <a className="dropdown-item" href="...">
                      My Shop
                    </a>
                  </div> */}
                </li>
                <li className="nav-item dropdown active">
                  <button
                    className="dropdown-toggle nav-link"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="dropdwnMenuLink2"
                  >
                    My Account
                  </button>
                  <ul className="nav-list dropdown-menu dropdown-menu-left">
                    <li>
                      <a className="nav-list-item" href="...">
                        Mens
                      </a>
                    </li>
                    <li>
                      <a className="nav-list-item" href="...">
                        Womens
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
