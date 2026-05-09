const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const Plat = require("./models/plats.model.js");
const Commande = require("./models/commande.model.js");
const platRoute = require("./views/plats.view.js");
const userRoute = require("./views/user.view.js");
const commandeRoute = require("./views/commande.view.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/plats", platRoute);
app.use("/api/user", userRoute);
app.use("/api/commande", commandeRoute);


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