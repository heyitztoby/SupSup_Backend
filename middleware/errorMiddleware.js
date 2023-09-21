const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status = statusCode;

  res.json({
    message: err.message,
    stack: process.env.PRODUCTION === "false" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
