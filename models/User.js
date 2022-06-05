const mongoose = require('mongoose')
const Club = require('./Club')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide your email'],
    },
    password: {
        type: String,
        required: [true, 'Please input a password'],
    },
    userId: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: [true, 'Please provide a screen name'],
    },
    secondaryDisplayName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    secondaryImage: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    clubs:[{ 
        type: Schema.Types.ObjectId,
        ref: 'Club'
    }],
    books: {
        type: [String],
        required: true,
    },
})


module.exports = mongoose.model('User', UserSchema)
