const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);
// Convert empty fields to an empty string so we can use validator functions
  data.name.first = !isEmpty(data.name.first) ? data.name.first : "";
  data.name.last = !isEmpty(data.name.last) ? data.name.last : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.patientId = !isEmpty(data.patientId) ? data.patientId : "";
  
// Name checks
  if (Validator.isEmpty(data.name.first)) {
    console.log(data.name.first);
    errors.first = "First name field is required";
  }
  if (Validator.isEmpty(data.name.last)) {
    console.log(data.name.last);
    errors.last = "Last name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  //Clinic Id check
  if (Validator.isEmpty(data.patientId)) {
    console.log(data.patientId);
    errors.patientId = "Clinic ID field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};