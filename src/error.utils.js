export class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NotFoundError";
  }
}

export class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "BadRequestError";
  }
}
