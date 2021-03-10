const mongoose = require('mongoose')
const User = require('./User')


const ClubSchema = new mongoose.Schema({ 
    clubName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
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
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
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
