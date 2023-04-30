module.exports.handleError = (err, req, res, next) => {
  console.log("err =====>>>>> ", err);
  const status = err.status || 500;
  res.status(status).send({
      error: [{ message: err.message || "Server Error" }],
  });
}