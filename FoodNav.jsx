import React, { Component } from "react";
import "../css/foodNav.css";

class FoodNav extends Component {
  state = {
    hideClass: false
  };

  onMenuClick = e => {
    e.preventDefault();
    this.setState(() => {
      return {
        hideClass: !this.state.hideClass
      };
    });
    if (!this.state.hideClass) {
      let menuIcon = document.getElementById("menuToggle");
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      let menuIcon = document.getElementById("menuToggle");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  };

  scroll = () => {
    window.scrollTo(0, 0, "smooth");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-main food-navbar-default navbar-expand-md"
          role="navigation"
        >
          <div className="container">
            <a className="navbar-brand" href="/food" onClick={this.scroll}>
              <h3 className="food-nav-text">
                <img
                  className="food-icon"
                  height="70"
                  src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png"
                  alt="Hamburger-Icon"
                  title="Close Menu"
                />
              </h3>
            </a>
            <button
              className="navbar-toggler food-nav-style"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
              aria-controls="navbar-ex1-collapse"
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={this.onMenuClick}
            >
              <i id="menuToggle" className="fas fa-bars" />
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
                <a className="dropdown-toggle nav-link" href="/" id="foodLink">
                  Restuarants
                </a>

                <a className="dropdown-toggle nav-link" href="/" id="foodLink">
                  Latest
                </a>
                <a className="dropdown-toggle nav-link" href="/" id="foodLink">
                  Pasadena
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default FoodNav;
