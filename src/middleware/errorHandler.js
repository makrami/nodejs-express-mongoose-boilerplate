import { BadRequestException, UnauthorizedException, NotFoundException, UnprocessableEntityException } from "../utils/response-handler/httpError.js";

const getErrorData = (err) => {
  const statusCode = err?.statusCode || 500;
  const error = err?.name || 'Internal Server Error';

  return err?.message ? { statusCode, error, message: err.message } : { statusCode, error };
}

export default function errorHandler(err, req, res, next) {
  if (
    err instanceof BadRequestException ||
    err instanceof UnauthorizedException ||
    err instanceof UnprocessableEntityException ||
    err instanceof NotFoundException) {
    return res.status(err.statusCode).send(getErrorData(err));
  } else {

    // import log4js from "log4js";
    // const logger = log4js.getLogger();
    // log4js.configure({
    //   appenders: { errorLog: { type: "file", filename: "./logs/errorLog.log" } },
    //   categories: { default: { appenders: ["errorLog"], level: "error" } },
    // });

    console.log(err);
    return res.status(500).send({ statusCode: 500, error: 'Internal Server Error' });
  }
}