const express = require("express");
const router = express.Router();

const { 
    uploadAvatar,
    uploadBanner,
    listAvatar,
    listBanner
} = require("../controller/files");
const { userById } = require("../controller/user");

// routes
router.get("file/avatar", listAvatar);
router.get("file/banner", listBanner);
router.post("file/avatar/upload/:userId", uploadAvatar);
router.post("file/banner/upload/:userId", uploadBanner);
// Pensé que sería buena idea agregar el :userId para identificar donde se subiría el banner y avatar
// Si no ambas funciones en el controller serían identicas usando el findOneAndUpdate()

//params
router.param("userId", userById);

module.exports = router;