const User = require("../model/user");

exports.listAvatar = (req, res) => {
    User.find().select("_id avatar").exec((err, avatars) => {
        if(err){
            return res.status(400).json({
                error: "Error al obtener la lista de avatares"
            });
        }
        res.json(avatars);
    });
};

exports.listBanner = (req, res) => {
    User.find().select("_id banner").exec((err, banners) => {
        if(err){
            return res.status(400).json({
                error: "Error al obtener la lista de banners"
            });
        }
        res.json(banners);
    });
};

exports.uploadAvatar = (req, res) => {
    let user = req.user;
    user.avatar = req.body.avatar;
    user.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo actualizar el avatar"
            });
        }
        res.json({
            message: "Avatar actualizado",
            data: req.body.avatar
        });
    });
};

exports.uploadBanner = (req, res) => {
    let user = req.user;
    user.banner = req.body.banner;
    user.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo actualizar el banner"
            });
        }
        res.json({
            message: "Banner actualizado",
            data: req.body.avatar
        });
    });
};