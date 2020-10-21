const User = require("../model/user");

exports.signup = (req, res) => {
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "No se pudo registrar el usuario"
            });
        }
        res.json({
            message: "Usuario registrado con éxito",
            user
        });
    });
};

exports.signin = (req, res) => {
    User.find(
        { email: req.body.email },
        (err, user) => {
            if(err || !user){
                return res.status(400).json({
                    error: "El usuario y/o contraseña no son correctos"
                })
            }
            return res.json({
                message: "Bienvenido",
                user
            });
        }
    );
};