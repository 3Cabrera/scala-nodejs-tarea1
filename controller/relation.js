const Relation = require("../model/relation");

exports.userRelationById = (req, res, next, id) => {
    Relation.find(
        { userRelationId: id }, 
        (err, data) => {
            if(err || !data) {
                return res.status(400).json({
                    error: "No se encontró la relación del usuario"
                })
            }
            req.userRelation = data;
            next();
        }
    );
};

exports.list = (req, res) => {
    Relation.find().exec((err, relation) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo obtener las relaciones"
            })
        }
    })
};

exports.create = (req, res) => {
    let relation = new Relation(req.body);
    relation.userRelationId = req.userRelation._id;
    relation.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo crear la relación de usuarios"
            });
        }
        res.json({
            message: "Relación creada",
            data
        })
    });
};

exports.remove = (req, res) => {
    const relation = req.userRelation;
    relation.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "No se pudo eliminar la relación"
            });
        }
        res.json({
            message: "Relación eliminada con éxito"
        });
    });
};