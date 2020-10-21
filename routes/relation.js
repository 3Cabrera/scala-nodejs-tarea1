const express = require("express");
const router = express.Router();

const {
    list,
    create,
    remove,
    userRelationById
} = require("../controller/relation");

//routes
router.get("/relation", list);
router.post("/relation/create/:userRelationId", create);
router.delete("/relation/:userRelationId", remove);

// params
router.param("userRelationId", userRelationById);

module.exports = router;