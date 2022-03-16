const router = require("express").Router();
const { Passport } = require("passport/lib");
const { checkAuthenticated, checkNotAuthenticated } = require("./utils/auth");

router.get("/", (req, res) => {
  res.render("Login");
});

router.post(
  "/",
  checkNotAuthenticated,
  passport.authenticate("local", {
    sucessRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
