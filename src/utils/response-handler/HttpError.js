export class BadRequestException extends Error {
  constructor(msg = null) {
    super();
    this.name = 'Bad Request';
    this.message = msg;
    this.statusCode = 400;
  }
}

export class UnauthorizedException extends Error {
  constructor(msg = null) {
    super();
    this.name = 'Unauthorized';
    this.message = msg;
    this.statusCode = 401;
  }
}

export class InternalServerErrorException extends Error {
  constructor(msg = null) {
    super();
    this.name = 'Internal Server Error';
    this.message = msg;
    this.statusCode = 500;
  }
}

export class NotFoundException extends Error {
  constructor(msg = null) {
    super();
    this.name = 'Not Found';
    this.message = msg;
    this.statusCode = 404;
  }
}

export class UnprocessableEntityException extends Error {
  constructor(msg = null) {
    super();
    this.name = 'Unprocessable Entity';
    this.message = msg;
    this.statusCode = 422;
  }
}