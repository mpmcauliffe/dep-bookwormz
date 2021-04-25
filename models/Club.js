const mongoose = require('mongoose')
const User = require('./User')
const MemberSchema = require('./MemberSchema')


const ClubSchema = new mongoose.Schema({ 
    clubName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    bookNumber: {
        type: String,
        required: true, 
    },
    chiefAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    chiefEmail: {
        type: String,
        required: true,
    },
    chiefPortraitURL: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    visibility: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
    },
    members: [MemberSchema],
    books: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model('Club', ClubSchema)
