import React, { Component } from "react";
import "../css/nav.css";

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
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/home">
              <i className="fas fa-home" />
              Sandapp
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
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
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mycode">
                    Code Snippets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/test">
                    Test Code
                  </a>
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
