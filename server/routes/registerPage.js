const router = require("express").Router();
const { checkAuthenticated, checkNotAuthenticated } = require("./utils/auth");

router.get("/", (req, res) => {
  res.render("Register");
});

module.exports = router;
