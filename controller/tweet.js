const Tweet = require("../model/tweet");

exports.tweetById = (req, res, next, id) => {
    Tweet.findById(id).exec((err, tweet) => {
        if(err || !tweet){
            return res.status(400).json({
                error: "No se pudo obtener el tweet"
            });
        }
        req.tweet = tweet;
        next()
    });
};

exports.list = (req, res) => {
    Tweet.find().exec((err, tweet) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo obtener los tweets"
            });
        }
        res.json(tweet);
    });
};

exports.createTweet = (req, res) => {
    let tweet = new Tweet(req.body);
    tweet.save((err, data) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo guardar el tweet"
            });
        }
        res.json({
            message: "Tweet creado"
        });
    });
};

exports.remove = (req, res) => {
    const tweet = req.tweet;
    tweet.remove((err, data) => {
        if(err){
            return res.status(400).json({
                error: "No se pudo eliminar el tweet"
            });
        }
        res.json({
            message: "Tweet eliminado"
        });
    });
};

exports.followers = (req, res) => {
    console.log("no se la lógica de followers")
    //supongo es la lista de Relations con el populate de userRelationId
    // Pero creo que este función debería ir en User más que en Tweet.
}