// imports
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/connection");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const User = require("./models/User");
require("dotenv").config();

const initalizePassport = require("./passport.config");
initalizePassport(
  passport,
  async (email) => {
    const userFound = await User.findOne({ email });
    return userFound;
  },
  async (id) => {
    const userFound = await User.findOne({ _id: id });
    return userFound;
  }
);

// route imports
const homePage = require("./routes/homepage");
const loginPage = require("./routes/loginPage");
const registerPage = require("./routes/registerPage");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

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
