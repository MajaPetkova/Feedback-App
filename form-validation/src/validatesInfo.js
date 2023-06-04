
export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/i.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  }
  if (!values.repassword) {
    errors.repassword = "Repeat password is required";
  } else if (values.repassword !== values.password) {
    errors.repassword = "Passwords don't match"
    // return
  } 
  return errors;
}
