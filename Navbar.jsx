import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { UncontrolledTooltip } from "reactstrap";
import SearchBox from "./functional/SearchBox";
import "./css/recipeNav_1.css";

class RecipeNav extends Component {
  state = {
    hideClass: false,
    searchModal: false,
    search: {
      query: "",
      type: 0,
      isSearching: "",
      lastQuery: "",
      typeString: ""
    }
  };

  onMenuClick = e => {
    e.preventDefault();
    this.setState({
      hideClass: !this.state.hideClass
    });
  };

  searchModalClick = () => {
    this.setState({
      searchModal: true
    });
  };

  closeSearchModal = () => {
    this.setState({
      searchModal: false
    });
  };

  // onChangeHandler = e => {
  //   e.persist();
  //   let value = null;

  //   if (e.target.name === "type") {
  //     value = parseInt(e.target.value);
  //   } else {
  //     value = e.target.value;
  //   }

  //   this.setState(prevState => {
  //     return {
  //       search: { ...prevState.search, [e.target.name]: value }
  //     };
  //   });
  // };

  //Search Change Handler
  onInputChange = e => {
    e.persist();
    let value = null;

    if (e.target.name === "type") {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }

    const updater = prevState => {
      const search = {
        ...prevState.search,
        [e.target.name]: value
      };

      return { search };
    };

    this.setState(updater);
  };

  onSearchClick = () => {
    if (this.state.search.type === 0) {
      this.toastMan();
    }
  };

  render() {
    return (
      <React.Fragment>
        <header className="c-site-header js-header sticky-header">
          <div className="c-site-header__left js_header__left">
            <button
              tabindex="0"
              className="c-site-header__hamberger-btn c-icon d-flex d-lg-none js-mobile-navigation-menu__open"
            >
              <img
                className="hamberger-icon"
                height="400"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPLRVBdrOgaVqecRpAzAlkKFjgKdf4b2jQAsqY97vAldcVO-i&s"
                alt="Hamburger-Icon"
                onClick={this.onMenuClick}
                title="Close Menu"
              />
            </button>
            <a href="/letseat" target="_self">
              <img
                className="primary-logo"
                height="90"
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="c-site-header__center d-none d-lg-flex js-header__center">
            <nav className="c-navigation js-navigation">
              <a
                href="/recipes"
                className="h5 c-navigation__link js-navigation-link"
              >
                Recipes
              </a>
              <a
                href="..."
                className="h5 c-navigation__link js-navigation-link"
              >
                Seasonal
              </a>
              <a
                href="..."
                className="h5 c-navigation__link js-navigation-link"
              >
                Ingredients
              </a>
              <a
                href="..."
                className="h5 c-navigation__link js-navigation-link"
              >
                About
              </a>

              <li className="searchBox list-inline-item">
                <button type="button" onClick={() => this.searchModalClick()}>
                  <i className="fas fa-search" />
                </button>
              </li>
            </nav>
          </div>
          <section
            className={
              this.state.hideClass
                ? "js-mobile-navigation-menu c-site-header__mobile c-site-header__mobile--open "
                : "js-mobile-navigation-menu c-site-header__mobile"
            }
            role="dialog"
            aria-modal="true"
          >
            <div className="c-site-header__mobile--header">
              <a
                href="/letseat"
                target="_self"
                className="c-site-header__mobile--link"
              >
                <img
                  height="70"
                  src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png"
                  alt="Food Logo"
                  className="primary-logo"
                  onCLick={this.onMenuClick}
                  id="foodLogo"
                />
              </a>
              <UncontrolledTooltip target="foodLogo" placement="right">
                Click to Close
              </UncontrolledTooltip>
            </div>
            <div className="c-site-header__mobile--container">
              <nav className="c-site-header">
                <a
                  href="..."
                  className="h5 c-navigation__link js-navigation-link"
                  target="_blank"
                >
                  Recipes
                </a>
                <div className="mobile-nav-item">
                  <a
                    href="..."
                    className="h6 c-navigation__link js-navigation-link"
                    target="_blank"
                  >
                    Seasonal
                  </a>
                </div>
                <div className="mobile-nav-item-1">
                  <a
                    href="..."
                    className="h7 c-navigation__link js-navigation-link"
                    target="_blank"
                  >
                    Ingredients
                  </a>
                </div>
                <div className="mobile-nav-item-2">
                  <a
                    href="..."
                    className="h8 c-navigation__link js-navigation-link"
                    target="_blank"
                  >
                    About
                  </a>
                </div>
              </nav>
            </div>
            <div className="c-site-header__mobile--footer">
              <li className="searchBox-1 list-inline-item">
                <button type="button" onClick={() => this.searchModalClick()}>
                  <i className="fas fa-search" />
                </button>
              </li>
            </div>
          </section>
        </header>

        <Modal
          visible={this.state.searchModal}
          width="600"
          height="300"
          className="ReactModal__Overlay ReactModal__Overlay--after-open global-search-modal-dialog-wrapper"
          effect="fadeInUp"
          onClickAway={() => this.closeSearchModal()}
        >
          <div className="ReactModal__Overlay ReactModal__Overlay--after-open global-search-modal-dialog-wrapper">
            <button
              type="reset"
              onClick={() => this.closeSearchModal()}
              value="Clear search"
            >
              <img
                height="90"
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png"
                alt="Cancel Search"
                title="Cancel Search"
                className="clear"
                id="foodLogo"
              />
            </button>
            <div
              className="ReactModal__Content--after-open global-search-modal-dialog"
              tabIndex="-1"
              role="dialog"
              aria-label="Search Modal Dialog"
            >
              <form
                action="/search/"
                autoComplete="off"
                method="get"
                className="search-dialog-form"
              >
                <SearchBox
                  query={this.state.search.query}
                  type={this.state.search.type}
                  onInputChange={this.onInputChange}
                  onSearchClick={this.onSearchClick}
                />
                {/* <fieldset>
                  <div className="col-md-9 input-group md-form form-sm form-2 pl-0">
                    <button type="submit" value="Submit search">
                      <img
                        height="46"
                        src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/fork-icon-11-256.png"
                        alt="logo"
                      />
                    </button>

                    <input
                      className="form-control my-0 py-1 search-input"
                      type="text"
                      name="query"
                      placeholder="Find a Recipe"
                      onChange={this.onChangeHandler}
                      value={this.state.search.query}
                    />
                  </div>
                </fieldset> */}
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default RecipeNav;
