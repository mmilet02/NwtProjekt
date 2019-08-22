const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  console.log(req.headers.authorization);
  next();
}

module.exports = auth;
