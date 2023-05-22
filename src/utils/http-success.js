function httpSuccess({ res, message = null, data = null, status = 200 }) {
  res.status(200).send({ status: 'success', message, data }).end();
}

export default httpSuccess;
