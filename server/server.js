const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* mongoose
  .connect(
    "mongodb+srv://Mario:curko333@cluster0-mdyho.mongodb.net/ReactRedux?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err)); */
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

const trips = require("./routes/api/trips");
app.use("/api/trips", trips);

app.listen(port, () => console.log(`listening on port ${port}`));
