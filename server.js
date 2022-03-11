// imports
const express = require("express");
const app = express();
const PORT = 3000;
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => {
  console.log("server live");
});
