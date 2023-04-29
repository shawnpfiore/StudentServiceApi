const {mongoose} = require("mongoose")

const PostSchema = mongoose.Schema({
    title: {
        type: String, required: true,
    },
    description: {
        type: String, required: true,
    },
    date: {
        type: String, default: Date.now,
    },
    ip: {
        type: String, required: true,
    },
    name: {
        type: String, required: true,
    },
    LessonData: [{
        status: {type: String, required: true},
        steps: [{
            step: {type: String, required: false},
            passed: {type: Boolean, required: false}
        }]
    }]
})

module.exports = mongoose.model("Post", PostSchema);