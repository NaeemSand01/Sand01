import * as Yup from "yup";

const logSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Email should be a minimum of 5 characters")
    .max(100, "Email has a maximum character length of 100")
    .required("Email is required"),
  password: Yup.string()
    .min(10, "Password should be a minimum of 10 characters")
    .max(100, "Password has a maximum character length of 100")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Must include a lowercase letter and uppercase letter."
    )
    .required("Password is required")
});

export default logSchema;
