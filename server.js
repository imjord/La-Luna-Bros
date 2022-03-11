// imports
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login");
});

db.once("open", () => {
  console.log("Database live");
  app.listen(PORT, () => {
    console.log("server live");
  });
});
