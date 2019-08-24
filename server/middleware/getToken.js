const jwt = require("jsonwebtoken");
/*  */
function auth(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (token !== "null") {
    try {
      console.log("INSIDE IF");
      const payload = jwt.verify(token, "bigSecret");
      req.user = payload;
      next();
    } catch (err) {
      return res.status(500).json({
        msg: "Verification failed, token not valid, autorization denied"
      });
    }
  }
}

module.exports = auth;
