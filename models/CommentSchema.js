const mongoose = require('mongoose')
const User = require('./User')

const Schema = mongoose.Schema


const CommentSchema = new Schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    replyTo: String,
    replyToOrigin: String,
    subject: String,
    content: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
})


module.exports = CommentSchema

