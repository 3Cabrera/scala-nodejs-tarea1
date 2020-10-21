const User = require("../model/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exect((err, user) => {
        if(err || !err){
            return res.status(400).json({
                error: "No se encontró el usuario solicitado"
            })
        }
        req.user = user;
        next();
    });
};

exports.list = (req, res) => {
    User.find().exec((err, users) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo obtener la lista de usuarios "
            });
        }
        res.json(users);
    });
};

exports.profile = (req, res) => {
    User.find(
        { _id : req.body._id },
        (err, profile) => {
            if(err){
                return res.status(400).json({
                    error: "Error al obtener el perfil del usuario"
                });
            }
            res.json(profile);
        }
    );
};

exports.update = (req, res) => {
    User.updateOne(
        { _id: req.body._id },
        { $set: req.body },
        (err, user) => {
            if(err){
                return res.status(400).json({
                    error: "No se pudo actualizar el usuario"
                });
            }
            data = { ...user, ...req.body};
            res.json({
                message: "Usuario actualizado",
                data
            });
        }
    );
};