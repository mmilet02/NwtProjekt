const express = require("express");
const router = express.Router();

/* const sequelize = require("sequelize");
 */
const models = require("../../models/index");
/* const Trip = require("../../models/trip"); doesn't work, dunno why
 */

const Trip = models.Trip;

router.get("/", (req, res) => {
  //sequlize.get -> all trips
  Trip.findAll()
    .then(trips => {
      console.log(trips);
      res.sendStatus(200);
    })
    .catch(err => console.log("Error", err));
});

router.post("/", (req, res) => {
  console.log("inside the router");
  console.log(req.body);
  return;
});

module.exports = router;
