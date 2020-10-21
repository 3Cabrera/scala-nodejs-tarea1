const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

//import routes
const Auth = require("./routes/auth");
const User = require("./routes/user");
const File = require("./routes/file");
const Tweet = require("./routes/tweet");
const Relation = require("./routes/relation");

//app express
const app = express();

//db
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.URLDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, (err) => {
            if (err) throw err;
            console.log('Mongo is ONLINE');
        });

    } catch (err) {
        console.log('error: ' + err);
    }
}
db();

//middleware
app.use(bodyParser.json());
app.use(expressValidator());


//routes middleare
app.use("/api", Auth);
app.use("/api", User);
app.use("/api", File);
app.use("/api", Tweet);
app.use("/api", Relation);

//port
const port = process.env.PORT || 8000;

// listen port 
app.listen(port, () => {
    console.log(`Server... runing on port ${port}`);
});
