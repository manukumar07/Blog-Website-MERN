const { validationError } = require("joi");

const errorHandler = (error, req, res, next) => {
  //default error
  let status = 500;
  let data = {
    msg: "internal server error",
  };
  if (error instanceof validationError) {
    status = 401;
    data.msg = error.msg;
    return res.status(status).json(data);
  }
  if (error.status) {
    status = error.status;
  }
  if (error.msg) {
    data.msg = error.msg;
  }
  return res.status(status).json(data);
};

module.exports = errorHandler;
