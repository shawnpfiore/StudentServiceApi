const {mongoose, Schema} = require("mongoose")

// JSON Scheme for MongoDb
const PostSchema = mongoose.Schema({inventoryDetails: Schema.Types.Mixed })

module.exports = mongoose.model("Post", PostSchema);