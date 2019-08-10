const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
const database = new Sequelize("nwt_database", "postgres", "postgres", {
  /*   host: "127.0.0.1",
   */ dialect: "postgres"
});

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use;

const trips = require("./routes/api/trips");
app.use("/api/trips", trips);

app.listen(port, () => console.log(`listening on port ${port}`));
