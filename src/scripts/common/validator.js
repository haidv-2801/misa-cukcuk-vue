var validate = validate || {};

validate.required = (value) => {
  value = value || "";
  
  let isValid = false,
    msg = "";

  isValid = value.toString().trim().length > 0;
  if (!isValid) msg = "không được trống";

  return {
    isValid,
    msg,
  };
};

validate.minLength = (value) => {
  return (min) => {
    let isValid = false,
      msg = "";

    isValid = value.toString().trim().length >= min;
    if (!isValid) msg = `độ dài tối thiểu ${min} kí tự`;

    return {
      isValid,
      msg,
    };
  };
};

validate.maxLength = (value) => {
  return (max) => {
    let isValid = false,
      msg = "";

    isValid = value.toString().trim().length <= max;
    if (!isValid) msg = `độ dài tối đa ${max} kí tự`;

    return {
      isValid,
      msg,
    };
  };
};

validate.email = (value) => {
  let isValid = false,
    msg = "";

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  isValid = re.test(String(value).toLowerCase());
  if (!isValid) msg = `chưa đúng định dạng`;

  return {
    isValid,
    msg,
  };
};

validate.number = (value) => {
  let isValid = false,
    msg = "";

  isValid = /\D/.test(value);
  if (!isValid) msg = `chưa đúng định dạng`;

  return {
    isValid,
    msg,
  };
};

validate.isValidDate = (value) => {
  if (value.toString().trim() == "") {
    return {
      isValid: true,
      msg: "",
    };
  }

  let isValid = false,
    msg = "";

  // First check for the pattern
  if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(value)) isValid = false;

  // Parse the date parts to integers
  var parts = value.split("-");
  var day = parseInt(parts[2], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[0], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) {
    return {
      isValid: false,
      msg: "chưa đúng định dạng",
    };
  }

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  isValid = day > 0 && day <= monthLength[month - 1];

  if (!isValid) msg = "chưa đúng định dạng";

  return {
    isValid,
    msg,
  };
};

export default validate;
