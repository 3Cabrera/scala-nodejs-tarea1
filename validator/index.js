exports.userSignupValidator = (req, res, next) => {
    req.check("name", "El Nombre es requerido").notEmpty();
    req.check("surnames", "El Apellido es requerido").notEmpty();
    req.check("email", "El email debe tener entre 5 a 30 caracteres")
        .matches(/.+\@.+\..+/)
        .withMessage("El email ingresado no tiene un formato válido")
        .isLength({
            min: 5,
            max: 30
        });
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.userSigninValidator = (req, res, next) => {
    req.check("email", "El Email es requerido")
        .matches(/.+\@.+\..+/)
        .withMessage("El email ingresado no tiene un formato válido")
        .notEmpty();
    req.check("password", "La contraseña es requerida").notEmpty();
    const errors = req.validationErrors();
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.tweetValidator = (req, res, next) => {
    req.check("message", "El mensaje es requerido").notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}