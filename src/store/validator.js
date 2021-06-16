var validate = validate || {};

validate.required = (value) => {
  let isValid = false,
      msg = "";

  isValid = value.toString().trim().length > 0;
  if (!isValid) msg = "không được trống";

  return {
    isValid,
    msg
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
      msg
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
      msg
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
    msg
  };
};

validate.number = (value) => {
  let isValid = false,
      msg = "";

  isValid = /\D/.test(value);
  if (!isValid) msg = `chưa đúng định dạng`;

  return {
    isValid,
    msg
  };
};

export default validate;
