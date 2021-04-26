const mongoose = require('mongoose')
const User = require('./User')

const Schema = mongoose.Schema


const CommentSchema = new Schema({
    commenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    commenterName: {
        type: String,
        required: true,
    },
    commenterProfile: {
        type: String,
        required: true,
    },
    replyTo: String,
    subject: String,
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})


module.exports = CommentSchema

