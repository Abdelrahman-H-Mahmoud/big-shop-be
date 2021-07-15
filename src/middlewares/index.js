const { BadRequestError, NotFoundError } = require("../error.utils.js");
const { isValidId } = require("../utils/index.js");

const errorMiddleWare = (error, req, res, next) => {
  if (error instanceof NotFoundError) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  } else if (error instanceof BadRequestError) {
    return res.status(400).json({ message: error.message });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkIdMiddleWare = (req, res, next) => {
  if (!isValidId(req.params.id)) {
    return next(new BadRequestError("Invalid Id"));
  } else {
    return next();
  }
};

module.exports = {
  errorMiddleWare,
  checkIdMiddleWare
}
