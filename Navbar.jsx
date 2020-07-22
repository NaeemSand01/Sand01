import React, { Component } from "react";
import "./css/nav.css";

class Navbar extends Component {
  state = {
    hideClass: false,
  };

  componentDidMount() {
    this.runScripts();
  }

  // Run Scripts
  runScripts = () => {
    const script = document.createElement("script");
    script.src = "https://use.fontawesome.com/releases/v5.13.0/js/all.js";
    script.async = true;
    document.body.appendChild(script);
  };

  // Toggle Responsive Menu
  toggleMenu = () => {
    this.setState(() => {
      return {
        hideClass: !this.state.hideClass,
      };
    });
    if (!this.state.hideClass) {
      let menu = document.getElementById("menu");
      menu.classList.remove("menu_close");
      menu.classList.add("menu");
    } else {
      let menu = document.getElementById("menu");
      menu.classList.remove("menu");
      menu.classList.add("menu_close");
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <input type="checkbox" id="check" onClick={this.toggleMenu} />
          <label htmlFor="check">
            <i className="fas fa-bars" id="btn" />
            <i className="fas fa-times" id="cancel" />
          </label>
          <div className="logo">Nutrition Information</div>
          <img
            src="https://img.icons8.com/plasticine/100/000000/leaf.png"
            alt="logo"
          />
          <ul id="menu" className="menu_close">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profiles">Plant Info</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
