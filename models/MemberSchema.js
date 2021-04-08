const mongoose = require('mongoose')
const User = require('./User')

const Schema = mongoose.Schema


const MemberSchema = new Schema({
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
    chiefAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
})


module.exports = MemberSchema
