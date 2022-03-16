// imports
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/connection");
require("dotenv").config();

// route imports
const homePage = require("./routes/homepage");
const loginPage = require("./routes/loginPage");
const registerPage = require("./routes/registerPage");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homePage);
app.use("/login", loginPage);
app.use("/register", registerPage);

// wild card
app.use("*", (req, res) => {
  res.status(404).render("404", { title: "404" });
});

db.once("open", () => {
  console.log("Database live");
  app.listen(PORT, () => {
    console.log("server live");
  });
});
