const express = require("express");
const router = express.Router();

const {
    list,
    followers,
    createTweet,
    remove,
    tweetById
} = require("../controller/tweet");
const { tweetValidator } = require("../validator");

// routes
router.get("/tweets", list);
router.get("/tweet/followers", followers); //creo que debería ir en Users o Relations
router.post("/tweet/create", tweetValidator, createTweet);
router.delete("/tweet/:tweetId", remove);

// params
router.param("tweetId", tweetById);

module.exports = router;