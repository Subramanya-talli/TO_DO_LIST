const mongoose = require("mongoose")

async function connectToMongoDb(Url)
{
    const URL = mongoose.connect(Url)

    return URL;
}

module.exports = {
    connectToMongoDb
}