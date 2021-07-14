import { BadRequestError, NotFoundError } from "../error.utils.js";
import { isValidId } from "../utils/index.js";

export const errorMiddleWare = (error, req, res, next) => {
  if (error instanceof NotFoundError) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  } else if (error instanceof BadRequestError) {
    return res.status(400).json({ message: error.message });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkIdMiddleWare = (req, res, next) => {
  if (!isValidId(req.params.id)) {
    return next(new BadRequestError("Invalid Id"));
  } else {
    return next();
  }
};
