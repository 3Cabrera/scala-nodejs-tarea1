const express = require("express");
const router = express.Router();

const {
    list,
    profile,
    update,
} = require("../controller/user");

// routes
router.get("/user/list", list);
router.get("/user/profile", profile);
router.put("/user", update);

module.exports = router;