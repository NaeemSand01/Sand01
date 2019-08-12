import React, { Component } from "react";
import * as userProfileService from "../../services/userProfileService";
import { toast } from "react-toastify";
import logger from "sabio-debug";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import profileSchema from "./UserProfileSchema";
import FileUpload from "../files/FileUpload";

const _logger = logger.extend("UserProfile");

class UserProfile extends Component {
  state = {
    formData: {
      id: "",
      userId: "",
      firstName: "",
      lastName: "",
      middleInitial: "",
      bio: "",
      avatarUrl: "",
      email: "",
      roleId: ""
    },
    initialValues: {
      firstName: "",
      lastName: "",
      middleInitial: "",
      bio: "",
      avatarUrl: "",
      userId: "",
      id: "",
      roleId: ""
    }
  };

  componentDidMount() {
    if (this.props.location.state) {
      if (this.props.location.state.userId) {
        this.getUserInfo();
      }
    } else {
      return;
    }
  }

  getUserInfo = () => {
    userProfileService
      .getByUserId()
      .then(this.onGetByUserIdSuccess)
      .catch(this.onGetByUserIdError);
  };

  onGetByUserIdSuccess = res => {
    this.setState(() => ({
      initialValues: {
        firstName: res.item.firstName,
        lastName: res.item.lastName,
        middleInitial: res.item.middleInitial,
        bio: res.item.bio,
        avatarUrl: res.item.avatarUrl,
        userId: res.item.userId,
        id: res.item.id,
        email: res.item.email,
        roleId: res.item.roles
      }
    }));
  };

  onFormSubmitSuccess = () => {
    if (!this.props.location.state.userId) {
      swal({
        title: "Success!",
        text: "Your profile has been created!",
        icon: "success",
        button: "OK"
      }).then(() => {
        this.props.getCurrentUser();
        this.props.history.push({
          pathname: "/home",
          state: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleInitial: this.state.middleInitial,
            bio: this.state.bio,
            avatarUrl: this.state.avatarUrl,
            userId: this.state.userId,
            id: this.state.id,
            email: this.state.email,
            roleId: this.state.roleId
          }
        });
      });
    } else {
      swal({
        title: "Success!",
        text: "Your profile has been updated!",
        icon: "success",
        button: "OK"
      }).then(() => {
        this.props.getCurrentUser();
        this.props.history.push({
          pathname: "/home",
          state: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleInitial: this.state.middleInitial,
            bio: this.state.bio,
            avatarUrl: this.state.avatarUrl,
            userId: this.state.userId,
            id: this.state.id,
            email: this.state.email,
            roleId: this.state.roleId
          }
        });
      });
    }
  };

  onFormSubmitError = err => {
    _logger(err);
    toast.error(`${err}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  onFormSubmit = formValues => {
    const profile = { ...formValues };
    if (this.props.location.state.userId) {
      userProfileService
        .updatedProfileData(profile, this.state.initialValues.id)
        .then(this.onFormSubmitSuccess)
        .catch(this.onFormSubmitError);
    } else {
      userProfileService
        .postProfile(profile)
        .then(this.onFormSubmitSuccess)
        .catch(this.onFormSubmitError);
    }
    return;
  };

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={profileSchema}
          enableReinitialize={true}
          onSubmit={this.onFormSubmit}
          render={({ errors, touched, handleBlur, setFieldValue }) => {
            return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h5>
                          {this.props.location.state &&
                          this.props.location.state.userId
                            ? "Edit Your Profile"
                            : "Create A Profile"}
                        </h5>
                        <span>
                          {this.props.location.state &&
                          this.props.location.state.userId
                            ? "Edit the desired fields then click the update button"
                            : "Please Make sure fill all the fields before clicking the submit button"}
                        </span>
                      </div>
                      <div className="card-body">
                        <Form>
                          <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                              component="input"
                              className={
                                "form-control" +
                                (errors.firstName && touched.firstName
                                  ? " is-invalid"
                                  : "")
                              }
                              name="firstName"
                              placeholder="Enter First Name"
                            />
                            <ErrorMessage
                              name="firstName"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <div>
                            <label
                              style={{
                                paddingTop: "20px"
                              }}
                              htmlFor="lastName"
                            >
                              Last Name
                            </label>
                            <Field
                              component="input"
                              className={
                                "form-control" +
                                (errors.lastName && touched.lastName
                                  ? " is-invalid"
                                  : "")
                              }
                              name="lastName"
                              placeholder="Enter Last Name"
                            />
                            <ErrorMessage
                              name="lastName"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              style={{
                                paddingTop: "20px"
                              }}
                              htmlFor="middleInitial"
                            >
                              Middle Initial
                            </label>
                            <Field
                              component="input"
                              className={
                                "form-control" +
                                (errors.middleInitial && touched.middleInitial
                                  ? " is-invalid"
                                  : "")
                              }
                              name="middleInitial"
                              placeholder="Enter Middle Initial"
                            />
                            <ErrorMessage
                              name="middleInitial"
                              className="invalid-feedback"
                              component="div"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              style={{
                                paddingTop: "5px"
                              }}
                              htmlFor="bio"
                            >
                              Bio
                            </label>
                            <Field
                              rows="5"
                              className={
                                "form-control" +
                                (errors.bio && touched.bio ? " is-invalid" : "")
                              }
                              name="bio"
                              placeholder="Enter Bio"
                              component="textarea"
                            />
                            <ErrorMessage
                              name="bio"
                              className="invalid-feedback"
                              component="div"
                            />
                            <FileUpload
                              errors={errors}
                              touched={touched}
                              setFieldValue={setFieldValue}
                              handleBlur={handleBlur}
                              name="avatarUrl"
                              label="Profile Image"
                            />
                            <div
                              style={{
                                paddingTop: "20px"
                              }}
                              className="text-right btn-mb"
                            >
                              <button
                                type="submit"
                                className="btn btn-primary"
                                name="submitBtn"
                              >
                                {this.props.location.state &&
                                this.props.location.state.userId
                                  ? "Update"
                                  : "Submit"}
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

UserProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  location: PropTypes.shape({
    state: PropTypes.object,
    userId: PropTypes.number
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  currentUser: PropTypes.object,
  getCurrentUser: PropTypes.func
};

export default UserProfile;
