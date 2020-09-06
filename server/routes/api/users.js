const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/* const models = require("../../models/index");
const User = models.User;
 */
const User = require("../../models/index").User;
const auth = require("../../middleware/authentication");

router.get("/", auth, (req, res) => {
  User.findOne({
    where: { email: req.user.email },
    attributes: ["id", "fullname", "createdAt", "updatedAt", "email"],
  })
    .then((user) => {
      return res.json({
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "User not found",
      });
    });
});

router.get("/user/:id", (req, res) => {
  id = +req.params.id;
  User.findOne({ where: { id: id } })
    .then((user) => {
      console.log("USER SERVER", user);
      return res.json({
        user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "User fetching Error",
      });
    });
});

router.post("/register", (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(500).json({
      msg: "All fields required",
    });
  }
  User.findOne({ where: { email: email } }).then((user) => {
    if (user) {
      return res.status(500).json({
        msg: "Email already in use",
      });
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({
            msg: "Server Error, please try again later",
          });
        }
        const newUser = { fullname, password: hashedPassword, email };
        User.create(newUser)
          .then((user) => {
            const userSign = {
              fullname: user.fullname,
              email: user.email,
              id: user.id,
            };
            jwt.sign(
              userSign,
              "bigSecret",
              { expiresIn: 3600 },
              (err, token) => {
                if (err) {
                  return res.status(500).json({
                    msg: "Server error, try again later",
                  });
                }
                return res.json({
                  user: userSign,
                  token,
                });
              }
            );
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({
              msg: "Server error - User not created, try again later",
            });
          });
      });
    });
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({
      msg: "Enter all fields",
    });
  }
  User.findOne({ where: { email: email } }).then((user) => {
    if (!user) {
      return res.status(500).json({
        msg: "Invalid username or password",
      });
    }
    bcrypt.compare(password, user.password).then((success) => {
      if (!success) {
        return res.status(500).json({ msg: "Invalid username or password" });
      }
      const userSign = {
        fullname: user.fullname,
        email: user.email,
        id: user.id,
      };
      jwt.sign(userSign, "bigSecret", { expiresIn: 3600 }, (err, token) => {
        if (err) {
          return res.status(500).json({ msg: "Server error, try again later" });
        }
        if (!token) {
          return res.json({ msg: "Server error, try again later" });
        }
        return res.json({
          user: userSign,
          token,
        });
      });
    });
  });
});

module.exports = router;
