const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const tweetSchema = mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: "User"
        },
        message: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);