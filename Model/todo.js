const mongoose = require("mongoose")

const todotaskSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
            },
            date: {
            type: Date,
            default: Date.now
            }
    },
    {
        timestamps: true
    }
);

const TodoTask = mongoose.model("todotask", todotaskSchema);
module.exports = TodoTask;