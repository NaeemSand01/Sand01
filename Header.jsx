import React, { Component } from "react";
import "./css/ecommerceHeader.css";
import Modal from "react-awesome-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./css/loginModal.css";
import logSchema from "./schema/logSchema";
import regSchema from "./schema/regSchema";

class Header extends Component {
  state = {
    regModalVisible: false,
    logModalVisible: false,
    searchModal: false,
    email: "",
    password: "",
    passwordConfirm: "",
    search: {
      query: "",
      type: 0
    }
  };

  searchModal;

  logModalClick = () => {
    this.setState({
      logModalVisible: true
    });
  };

  closelogModal = () => {
    this.setState({
      logModalVisible: false
    });
  };

  regModalClick = () => {
    this.setState({
      regModalVisible: true
    });
  };

  closeRegModal = () => {
    this.setState({
      regModalVisible: false
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

  onChangeHandler = e => {
    e.persist();
    let value = null;

    if (e.target.name === "type") {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }

    this.setState(prevState => {
      return {
        search: { ...prevState.search, [e.target.name]: value }
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header headerstyle">
          <div className="topBar">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-none d-md-block">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="...">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="...">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="...">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="...">
                        <i className="fab fa-tumblr" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul className="list-inline float-right top-right">
                    <li className="account-login list-inline-item">
                      <span>
                        <button
                          onClick={() => this.logModalClick()}
                          type="button"
                          id="loginModal"
                          name="login"
                        >
                          Log in
                        </button>

                        <small>or</small>
                        <button
                          onClick={() => this.regModalClick()}
                          type="button"
                          id="regModal"
                          name="register"
                        >
                          Create an Account
                        </button>
                      </span>
                    </li>
                    <li className="searchBox list-inline-item">
                      <button
                        type="button"
                        onClick={() => this.searchModalClick()}
                      >
                        <i className="fas fa-search" />
                      </button>
                    </li>
                    <li className="cart-dropdown dropdown list-inline-item">
                      <a
                        href="..."
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fas fa-shopping-cart" />
                        $0
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <h6 className="cart-item-text">
                            Item(s) in your cart
                          </h6>
                        </li>
                        <li>
                          <a href="...">
                            <div className="media">
                              <img
                                className="media-left media-object"
                                src="https://d29pz51ispcyrv.cloudfront.net/images/I/e5whkpVvdCb65rA5kZ5EpG.MD256.jpg"
                                alt="cart-img"
                              />
                              <div className="media-body">
                                <h6 className="media-heading">
                                  Nintendo Switch Console with Neon Blue and Red
                                  Joy-Con Wireless Controllers
                                  <br />
                                  <span>2 x $199</span>
                                </h6>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="...">
                            <div className="media">
                              <img
                                className="media-left media-object"
                                src="https://d29pz51ispcyrv.cloudfront.net/images/I/rJuPuJ4aYYaYwoN4x.MD256.JPEG"
                                alt="cart-img"
                              />
                              <div className="media-body">
                                <h6 className="media-heading">
                                  Sony Playstation 4 PRO Gaming Console W/1TB &
                                  Dualshock 4 Controller and Headset
                                  <br />
                                  <span>2 x $199</span>
                                </h6>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <div
                            className="btn-group shop-buttons"
                            role="group"
                            aria-label="..."
                          >
                            <button
                              type="button"
                              className=" btn btn-basic"
                              onClick=""
                            >
                              Shopping Cart
                            </button>
                            <button
                              type="button"
                              className="btn btn-"
                              onClick=""
                            >
                              Checkout
                            </button>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Login modal */}
        <Modal
          visible={this.state.logModalVisible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closelogModal()}
        >
          <div className="log-header text-center py-1">
            <h3>Login</h3>
            <h6 className="text-center">
              Enter your Email and Password to Login
            </h6>
          </div>
          <div className="card log-card mt-1 p-4">
            <Formik
              initialValues={this.state}
              validationSchema={logSchema}
              onSubmit={this.logClick}
              render={({ errors, touched }) => {
                return (
                  <Form id="logForm" autoSave="off" autoComplete="off">
                    <div className="form-group">
                      <label className="col-form-label">Email</label>
                      <Field
                        type="email"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        name="email"
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        name="email"
                        className="invalid-feedback"
                        component="div"
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <Field
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        className="invalid-feedback"
                        component="div"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-sm-3">
                        <button
                          type="submit"
                          className="btn btn-default"
                          name="submitBtn"
                          id="login"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            />
          </div>
        </Modal>
        {/* Regiser modal */}
        <Modal
          visible={this.state.regModalVisible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeRegModal()}
        >
          <div className="log-header text-center py-1">
            <h3>Create an Account</h3>
            <h6 className="text-center">
              Enter your Email and Password to Sign up
            </h6>
          </div>
          <div className="card log-card mt-1 p-4">
            <Formik
              initialValues={this.state}
              validationSchema={regSchema}
              onSubmit={this.regModalClick}
              render={({ errors, touched }) => {
                return (
                  <Form id="regForm" autoSave="off" autoComplete="off">
                    <div className="form-group">
                      <label className="col-form-label">Email</label>
                      <Field
                        type="email"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        name="email"
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        name="email"
                        className="invalid-feedback"
                        component="div"
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <Field
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        className="invalid-feedback"
                        component="div"
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <Field
                        type="password"
                        className={
                          "form-control" +
                          (errors.passwordConfirm && touched.passwordConfirm
                            ? " is-invalid"
                            : "")
                        }
                        name="passwordConfirm"
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage
                        name="passwordConfirm"
                        className="invalid-feedback"
                        component="div"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-sm-3">
                        <button
                          type="submit"
                          className="btn btn-default"
                          name="submitBtn"
                          id="register"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            />
          </div>
        </Modal>
        {/* Search Modal */}
        <Modal
          visible={this.state.searchModal}
          width="400"
          height="30"
          effect="fadeInUp"
          onClickAway={() => this.closeSearchModal()}
        >
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              className="form-control my-0 py-1 search-input"
              type="text"
              name="query"
              placeholder="Search..."
              onChange={this.onChangeHandler}
              value={this.state.search.query}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="searchText">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
