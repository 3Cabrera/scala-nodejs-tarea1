const express = require("express");
const router = express.Router();

const { signin, signup } = require("../controller/auth");
const { userSignupValidator, userSigninValidator } = require("../validator");

router.post("/auth/sign-up", userSignupValidator, signup);
router.get("/auth/log-in", userSigninValidator, signin);

module.exports = router;