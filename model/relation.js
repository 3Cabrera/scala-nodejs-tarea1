const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const relationSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        userRelationId: {
            type: ObjectId,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Relation", relationSchema);