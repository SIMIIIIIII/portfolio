const mongoose = require('mongoose')
const commentsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false,
        default: 'Anonyme'
    },

    commentDate:{
        type: Date,
        required: true,
        default: Date.now
    },

    comment:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentsSchema)