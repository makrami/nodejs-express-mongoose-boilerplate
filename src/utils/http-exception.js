// import log4js from "log4js";
// const logger = log4js.getLogger();
// log4js.configure({
//   appenders: { errorLog: { type: "file", filename: "./logs/errorLog.log" } },
//   categories: { default: { appenders: ["errorLog"], level: "error" } },
// });

/* ============================== ERROR MESSAGE ==============================  */
function httpException({ res, message = null, error = null, status = 500 }) {
  switch (true) {
    case res == null:
      console.log({ error });
      break;

    case status === 500:
      console.log({ error });
      res.status(status).send({ status: 'failed', statusCode: status, message: 'Internal server error' });
      break;

    default:
      res.status(status).send({ status: 'failed', statusCode: status, message });
      break;
  }
}

export default httpException;
