const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

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


//port
const port = process.env.PORT || 8000;

// listen port 
app.listen(port, () => {
    console.log(`Server... runing on port ${port}`);
});
