const express = require("express");
const mongoose = require("mongoose");
const Plat = require("./models/plats.model.js");
const platRoute = require("./views/plats.view.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/plats", platRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb://localhost:27017/AuPainTendre"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });