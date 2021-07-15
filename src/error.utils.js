class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NotFoundError";
  }
}

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "BadRequestError";
  }
}

module.exports = {
  NotFoundError,
  BadRequestError
}